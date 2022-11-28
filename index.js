// code your solution here
function superbowlWin(record){
    function win(results){
        return (results.result === 'W');
    }
   if (record.find(win) !== undefined){
    return (record.find(win)).year;
   }
   else{
    return undefined;
   }
}

