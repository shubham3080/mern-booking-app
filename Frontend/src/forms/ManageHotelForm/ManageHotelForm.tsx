import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FaciltiesSection from "./FacilitiesSection";
import GuestsSection from "./GuestsSection";
import ImagesSection from "./ImagesSection";

export type HotelFormData={
    name:string;
    city:string;
    country:string;
    description:string;
    type:string;
    adultCount:number;
    childCount:number;
    facilities:string[];
    pricePerNight:number;
    starRating:number;
    imageFiles:FileList;
    imageUrls:string[];
}
type Props={
    onSave:(hotelFormData:FormData)=>void;
    isLoading:boolean;
}
const ManageHotelForm=({ onSave ,isLoading }:Props)=>{
    const formMehtods=useForm<HotelFormData>();
    const {handleSubmit}=formMehtods;
    const onSubmit=handleSubmit((formdata:HotelFormData)=>{
        const data=new FormData();
        data.append("name",formdata.name);
        data.append("city",formdata.city);
        data.append("country",formdata.country);
        data.append("description",formdata.description);
        data.append("type",formdata.type);
        data.append("pricePerNight",formdata.pricePerNight.toString());
        data.append("starRating",formdata.starRating.toString());
        data.append("adultCount",formdata.adultCount.toString());
        data.append("childCount",formdata.childCount.toString());
        formdata.facilities.forEach((facility,index)=>{
                data.append(`facilities[${index}]`,facility)
        })
        Array.from(formdata.imageFiles).forEach((imageFile)=>{
            data.append(`imageFiles`,imageFile)
        })
        onSave(data);
    })
    return (<FormProvider {...formMehtods}>
    <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <DetailsSection/>
        <TypeSection/>
        <FaciltiesSection/>
        <GuestsSection/>
        <ImagesSection/>
        <span className="flex justify-end">
            <button disabled={isLoading} className="bg-blue-600 disabled:bg-gray-500 text-white p-2 font-bold hover:bg-blue-500 text-xl rounded px-4">
            {isLoading?"Saving...":"Save"} 
            </button>
        </span>
    </form></FormProvider>)
}
export default ManageHotelForm;