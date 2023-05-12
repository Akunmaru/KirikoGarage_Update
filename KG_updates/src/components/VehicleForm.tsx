import Input from "./Input"
import Button from "./Button"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseYear, chooseColor } from "../redux/slices/RootSlice"

//Interfaces

interface VehicleFormProps {
  id?: string[]
}

const VehicleForm = (props:VehicleFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();


  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length>0){
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 5000)
      event.target.reset()
    } else {
      dispatch(chooseMake(data.make))
      dispatch(chooseModel(data.model))
      dispatch(chooseYear(data.year))
      dispatch(chooseColor(data.color))

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 5000)
    }
  }

  return (
    <div>
      <form onSubmit= {handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='make'>Vehicle Make</label>
          <Input {...register('make')} name='make' placeholder='Make'/>
        </div>
        <div>
          <label htmlFor='model'>Vehicle Model</label>
          <Input {...register('model')} name='model' placeholder='Model'/>
        </div>
        <div>
          <label htmlFor='year'>Vehicle Year</label>
          <Input {...register('year')} name='year' placeholder='Year'/>
        </div>
        <div>
          <label htmlFor='color'>Vehicle Color</label>
          <Input {...register('color')} name='color' placeholder='Color'/>
        </div>
        <div className="flex p-1">
          <Button className="flex place-items-center m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit Vehicle to Garage
          </Button>
        </div>
      </form>
    </div>
  )
}

export default VehicleForm
