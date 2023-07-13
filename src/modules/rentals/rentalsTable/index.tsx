import { useBearStore } from "@/src/infrastructure/store/store";
import Image from "next/image"

const RentalsTable = ({ array }: {
    array: string[]
}) => {
    //State drilled from Parent RSC to child RSC
    console.log(222,useBearStore.getState());
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                {
                    array.map(() => {
                        return (
                            <>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="px-6 py-4">
                                        <Image className="w-full"
                                            width={100}
                                            height={100}
                                            src="/pics/card-top.jpg"
                                            alt="Sunset in the mountains"
                                        />
                                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default RentalsTable;