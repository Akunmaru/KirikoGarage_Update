import React, {useState} from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    {field: 'id', headerName: "ID", width: 90, hide: true },
    {field: 'make', headerName: "Vehicle Make", width: 90, flex: 1},
    {field: 'model', headerName: "Vehicle Model", width: 90, flex: 1},
    {field: 'year', headerName: "Vehicle Year", width: 90, flex: 1},
    {field: 'color', headerName: "Vehicle Color", width: 90, flex: 1}
]

function DataTable() {
    let [ open, setOpen] = useState(false);

    const {vehicleData, getData} = useGetData()
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClosed = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection Model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
    }


    return (
        <>
            <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClosed}/>
            <div className='flex flex-row'>
                <div>
                    <button className='p-3 bg-purple-300 m-3 rounded hover:bg-red-800 hover:text-white'
                    onClick={() => handleOpen()}>
                        Create New Car
                    </button>
                </div>
                <Button onClick={handleOpen} className='p-3 bg-purple-300 m-3 rounded hover:bg-red-800 hover:text-white'>Update</Button>
                <Button onClick={deleteData} className='p-3 bg-purple-300 m-3 rounded hover:bg-red-800 hover:text-white'>Delete</Button>
            </div>
            <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"} 
            style={{ height: 400, width: '100%'}}>
                <h2 className="p-3 bg-red-500 my-2 text-white">My Garage</h2>
                <DataGrid rows={vehicleData} columns={columns} rowsPerPageOptions={[5]} 
                checkboxSelection={true} onSelectionModelChange={ (item: any) => {
                    setSelectionModel(item)
                }}/>
            </div>
        </>
  )
}

export default DataTable
