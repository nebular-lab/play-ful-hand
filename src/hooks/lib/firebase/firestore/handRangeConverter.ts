export const convertArrayToObject = (arr: number[][][][]) => {
  const obj: Record<string, Record<string, Record<string, Record<string, number>>>> = {};

  for (let i = 0; i < arr.length; i++) {
    obj[`dim1_${i}`] = {};
    for (let j = 0; j < arr[i].length; j++) {
      obj[`dim1_${i}`][`dim2_${j}`] = {};
      for (let k = 0; k < arr[i][j].length; k++) {
        obj[`dim1_${i}`][`dim2_${j}`][`dim3_${k}`] = {};
        for (let l = 0; l < arr[i][j][k].length; l++) {
          obj[`dim1_${i}`][`dim2_${j}`][`dim3_${k}`][`dim4_${l}`] = arr[i][j][k][l];
        }
      }
    }
  }

  return obj;
};
export const convertObjectToArray = (
  obj: Record<string, Record<string, Record<string, Record<string, number>>>>,
) => {
  const arr: number[][][][] = [];

  for (const i in obj) {
    const dim1 = obj[i];
    const dim1Index = parseInt(i.split('_')[1]);
    arr[dim1Index] = [];

    for (const j in dim1) {
      const dim2 = dim1[j];
      const dim2Index = parseInt(j.split('_')[1]);
      arr[dim1Index][dim2Index] = [];

      for (const k in dim2) {
        const dim3 = dim2[k];
        const dim3Index = parseInt(k.split('_')[1]);
        arr[dim1Index][dim2Index][dim3Index] = [];

        for (const l in dim3) {
          const dim4 = dim3[l];
          const dim4Index = parseInt(l.split('_')[1]);
          arr[dim1Index][dim2Index][dim3Index][dim4Index] = dim4;
        }
      }
    }
  }

  return arr;
};
