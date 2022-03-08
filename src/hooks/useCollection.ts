import { CollectionReference, DocumentData, onSnapshot, Query, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";

interface WithId {
  id: string
}

const useCollection = <T extends WithId>(query: Query<DocumentData>): [T[] | null, boolean] => {

  const [loading, setLoading] = useState<boolean>(true)
  const [value, setValue] = useState<T[] | null>(null)

  useEffect(() => {
    if (!query) {
      setValue(null);
      return;
    }
   
    const unsubscribe = onSnapshot(query, (snap: QuerySnapshot<DocumentData>) => {
      const validValue = snap?.docs?.map(item => ({...item.data(), id: item.id})) || []

      setLoading(false)
      setValue(validValue as T[])
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const resArray = [
    value,
    loading
  ];
  return useMemo(() => resArray as any, resArray);
};
export default useCollection