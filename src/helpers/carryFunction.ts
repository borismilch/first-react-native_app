const carryFunction = <T extends Function>(callBack: T) => () => callBack()

export default carryFunction