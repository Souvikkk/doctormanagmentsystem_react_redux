import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPersonalCare } from '../../Redux/PersonalCareSlice';
import { Link } from 'react-router-dom';
import { GridLoader } from 'react-spinners';

const PersonalCare = () => {
    const dispatch = useDispatch();

    const { all_personal_care_data,status } = useSelector((state) => state?.personalcare);
    // console.log(all_personal_care_data);
  
    const dname = all_personal_care_data?.data?.[0]?.departmentName
    const doctor = all_personal_care_data?.data?.[0]?.doctor_id
  
    useEffect(() => {
      dispatch(fetchAllPersonalCare());
    }, [dispatch]);
  
  return (
    <>
        <section className="section team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="mb-4">{dname}</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                  Today’s users expect effortless experiences. Don’t let
                  essential people and processes stay stuck in the past. Speed
                  it up, skip the hassles
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {
              status==='loading' ? <div style={{margin:'auto'}}><GridLoader color="#36d7b7" /> </div>  :
              doctor?.map((item, index) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team-block mb-5 mb-lg-0">
                      <img
                         src={`${process.env.PUBLIC_URL}/images/personal/personaldoc.jpg`}
                        alt=""
                        className="img-fluid w-100"
                        style={{ width: "200px", height: "200px" }}
                      />

                      <div className="content">
                        <h4 className="mt-4 mb-0">
                          <Link to={`/doctor-single/${item?._id}`}>{item?.name}</Link>
                        </h4>
                        <p>{item?.description.slice(0, 100)}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

    </>
  )
}

export default PersonalCare