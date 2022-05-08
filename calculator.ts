/*function thereAsecondValue(StringNumbers: String){
    return StringNumbers.length === 3;
}
*/
export function Add(StringNumbers: String){

    let result = 0;
    const values: string[] = StringNumbers.split(",");
    let oneValue = values[0];
    result += Number(oneValue|| 0);

    if(values[1]){
        let secondValue = values[1];
        result = Number(secondValue|| 0) + result;
    }

    if(values[2]){
        let thirdValue = values[2];
        result = Number(thirdValue || 0) + result;
    }

    if(values[3]){
        let fourValue = values[3];
        result = Number(fourValue || 0) + result;
    }
    return result;
}