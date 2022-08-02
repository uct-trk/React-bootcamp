import React, { memo } from 'react'


function AddTodo({ submitHandle, onChange, todo }) {
    console.log("Add to do rendered")
    return (
        <form className="" onSubmit={submitHandle} action="">
            <div className="text-center w-full">
                <input
                    className="border-2 p-4"
                    type="text"
                    value={todo}
                    onChange={onChange}
                />
                <button
                    className="bg-green-500 text-white p-4"
                    disabled={!todo}
                    type="submit"
                >
                    Ekle
                </button>


            </div>
        </form>
    )
}

export default memo(AddTodo)