import React,{useMemo} from 'react'
import {useTable} from 'react-table';
import './Table.css'
const Mock_Data=[
    {col_id:0,overall:'Products name: Produc2 Products sku: 045432626834', quantity:78, revenue1:'$20.87', revenue2:'$67.86'},
    {col_id:1,overall:'Products name: Produc2 Products sku: 045432626834', quantity:78, revenue1:'$20.87', revenue2:'$67.86'},
    {col_id:2,overall:'Products name: Produc2 Products sku: 045432626834', quantity:78, revenue1:'$20.87', revenue2:'$67.86'},
    {col_id:3,overall:'Products name: Produc2 Products sku: 045432626834', quantity:78, revenue1:'$20.87', revenue2:'$67.86'},
    {col_id:4,overall:'Products name: Produc2 Products sku: 045432626834', quantity:78, revenue1:'$20.87', revenue2:'$67.86'},
    {col_id:5,overall:'Products name: Produc2 Products sku: 045432626834', quantity:78, revenue1:'$20.87', revenue2:'$67.86'},
    {col_id:6,overall:'Products name: Produc2 Products sku: 045432626834', quantity:78, revenue1:'$20.87', revenue2:'$67.86'},
    {col_id:7,overall:'Products name: Produc2 Products sku: 045432626834', quantity:78, revenue1:'$20.87', revenue2:'$67.86'},
    {col_id:8,overall:'Products name: Produc2 Products sku: 045432626834', quantity:78, revenue1:'$20.87', revenue2:'$67.86'},
    {col_id:9,overall:'Products name: Produc2 Products sku: 045432626834', quantity:78, revenue1:'$20.87', revenue2:'$67.86'},
    {col_id:10,overall:'Products name: Produc2 Products sku: 045432626834', quantity:78, revenue1:'$20.87', revenue2:'$67.86'},
    ]
const COLUMNS=[
    {   id:0,
        header:'Overall Rate',
        accessor:'overall'
    },
    {id:1,
        header:'Item Quantity',
        accessor:'quantity'
    },
    {id:2,
        header:'Revenue per Item',
        accessor:'revenue1'
    },
    {id:3,
        header:'Revenue Item',
        accessor:'revenue2'
    }
]
export default function BasicTable() {
    const columns= useMemo(()=> COLUMNS,[])
    const data= useMemo(()=> Mock_Data,[])

    const tableInstance=useTable({
        columns,
        data
    })
    const{getTableProps,getTableBodyProps,headerGroups,rows, prepareRow }= tableInstance
  return (
    <div><span className='title'>Performance by product</span><table {...getTableProps()}>
        <thead>{
            headerGroups.map(headerGroup =>(
                <tr  {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map(column =>(
                <th {...column.getHeaderProps()}>{column.render('header')}</th>


                        ))
                    }
            </tr>
            ))}
            
        </thead>
        <tbody {...getTableBodyProps()}>{
            rows.map(row =>{
                prepareRow(row)
                return(
                    <tr {...row.getRowProps()}>{
                        row.cells.map((cell)=>{
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })
                    }
            </tr>

                )
            })
        }
    </tbody>
    </table></div>
  )
}


