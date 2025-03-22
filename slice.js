import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchData= createAsyncThunk(
    "chat/fetch",
    async (args,thunkAPI)=>{
        try{
           console.log("reached");
            const key="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";
            const response= await fetch("https://openrouter.ai/api/v1/chat/completions", {
             method: "POST",
             headers: {
               "Authorization": `Bearer ${key}`,
               "Content-Type": "application/json"
             },
             body: JSON.stringify({
               "model": "deepseek/deepseek-r1:free",
               "messages": [
                 {
                   "role": "user",
                   "content": args
                 }
               ]
             })
           });
           
            const j = await response.json();
            //  console.log(j.choices[0].message)
           return {ans:j.choices[0].message.content,qs:args};
           
         }catch(error){
            return "error";
         }
    }
)

const slice= createSlice({
    name:"slice1",
    initialState:{qna:"",reply:"",error:null,loading:false},
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(FetchData.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(FetchData.fulfilled,(state,action)=>{
            state.reply= action.payload.ans;
            state.qna= action.payload.qs;
            state.error=null;
        })
        .addCase(FetchData.rejected,(state,action)=>{
            state.loading= false;
            state.error=action.payload;
        })
    }
})

export default slice.reducer;