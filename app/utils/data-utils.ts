const modifyArrayData = (data: any[]): any[] => {
  const result = data.reduce((acc: any[], item: any) => {
    const { _id, ...rest } = item;
    acc.push({
      id: item._id.toString(),
      ...rest
    });
    return acc;
  }, []);

  return result;
}



const modifyObjData = (Obj:any ) => {
  const { _id, ...rest } = Obj;
  return {
    id: Obj._id.toString(),
    ...rest
  };
}



export { modifyArrayData, modifyObjData };