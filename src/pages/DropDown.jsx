import React from 'react'

const DropDown = ({optionArr,onChange,value,name}) => {
// arr=[{label:"low To high",value:"asc"},{label:" high to low",value:"desc"}]
              
    return (
        <div>
            <select onChange={(e)=>onChange(e.target.value,name)} value={value} >
                 {optionArr.map((e)=><option value={e.vaule}>{e.label}</option>)}
            </select>

        </div>
    )
}

export default DropDown
