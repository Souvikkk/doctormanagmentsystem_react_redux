import { AuthSlice } from "../AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import { FeaturedDoctorsSlice } from "../FeaturedDocSlice";
import { AllDepOnlySlice } from "../AllDepOnlySlice";
import { ChildCareSlice } from "../ChildCareSlice";
import { PersonalCareSlice } from "../PersonalCareSlice";
import { AllDocDepSlice } from "../AllDocDepSlice";
import { AllBlogSlice } from "../AllBlogSlice";
import { RecentBlogSlice } from "../RecentBlogSlice";
import { SearchBlogSlice } from "../SearchBlogSlice";
import { PostContactSlice, postContact } from "../PostContactSlice";
import { DashboardSlice } from "../DashboardSlice";
import { AllDoctorByDepSlice } from "../DocByDepSlice";
import { SingleDoctorSlice } from "../SingleDoctorSlice";
import { PostAppointmentSlice } from "../PostAppointementSlice";
import { SingleBlogSlice } from "../SingleBlogSlice";
import { PostBlogCommentSlice } from "../PostBlogCommentSlice";
import { GetCommentDetailsSlice } from "../GetCommentBlogSlice";
const Store = configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        featured_doc:FeaturedDoctorsSlice.reducer,
        alldept:AllDepOnlySlice.reducer,
        childcare:ChildCareSlice.reducer,
        personalcare:PersonalCareSlice.reducer,
        alldoc:AllDocDepSlice.reducer,
        allblog:AllBlogSlice.reducer,
        recent:RecentBlogSlice.reducer,
        search:SearchBlogSlice.reducer,
        contact:PostContactSlice.reducer,
        dashboard:DashboardSlice.reducer,
        docbydep:AllDoctorByDepSlice.reducer,
        single_doctor:SingleDoctorSlice.reducer,
        postAppo:PostAppointmentSlice.reducer,
        single_blog:SingleBlogSlice.reducer,
        postcommentBlog:PostBlogCommentSlice.reducer,
        getCommentBlog:GetCommentDetailsSlice.reducer


    }
})

export default Store