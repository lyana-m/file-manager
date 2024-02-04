import os from 'os';

export const printCpusInfo = () => {
  const cpusInfo = os.cpus();

  const tableData = cpusInfo.map((cpu) => {
    return {
      Model: cpu.model,
      'Speed (GHz)': cpu.speed / 1000
    }
  })

  console.log(`Tolal number of cpus: ${cpusInfo.length}`);
  console.table(tableData);
};
