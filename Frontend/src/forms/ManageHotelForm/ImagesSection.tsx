import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"

const ImagesSection=()=>{
    const {register,formState:{errors}}=useFormContext<HotelFormData>();
    return(
        <div>
            <h2 className="text-2xl font-semibold mb-3">Images</h2>
            <div className="border rounded p-4 flex felx-col gap-4">
                <input type="file"
                multiple
                accept="image/*"
                className="w-full text-gray-700 font-normal"
                {...register("imageFiles",{
                    validate:(imageFiles)=>{
                        const totalLength=imageFiles.length;
                        if(totalLength===0){
                            return "At least one image should be added"
                        }
                        if(totalLength>6){
                            return "Total no of images cannot be more than 6"
                        }
                        return true;
                    }
                })}/>
            </div>
            {errors.imageFiles && (<span className="text-red-500 font-bold text-sm">{errors.imageFiles.message}</span>)}
        </div>
    )
}
export default ImagesSection;