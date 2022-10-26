// code your solution here

// function superbowlWin(record, year, result){
//     return (result === 'W')

// }

superbowlWin = (record) => {
    const result = record.find(record => record.result ==='W');
    return !!result ? result.year:undefined;
}
