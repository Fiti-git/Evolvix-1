import React from "react";

export default function PopUp({handlePopUp, content}){

        return (
                <div 
                        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
                        onClick={handlePopUp}
                        >
                                {content}
                        
                </div>
        );
}