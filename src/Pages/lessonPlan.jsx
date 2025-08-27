import React from 'react'
import LessonPlanCard from '../components/LessonPlanCard'
import {supabase} from '../supabaseClient'


const lessonPlan = () => {



  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    fetch("http://localhost:5000/api/files")
      .then(res => res.json())
      .then(data => {
     console.log(data)
        setFiles(data.data || [])
      });
 
  }, []);

  return (
    <div className='flex flex-1 flex-col items-center gap-3 mx-auto sm:justify-center md:flex-row md:flex-wrap md:w-[60%] lg:w-[60%] '>

        <LessonPlanCard subject={'Science'} src="/SciencePage"   />
        <LessonPlanCard subject={'Maths'} src="/mathPage" />
        <LessonPlanCard subject={'English Lang.'} src="/EnglishPage" />
        <LessonPlanCard subject={'Social Studies'} src="/SocialStudiesPage" />
        <LessonPlanCard subject={'RME'} src="/RMEpage"/>
        <LessonPlanCard subject={'CAD'} src="/CADpage" />
        <LessonPlanCard subject={'Career tech.'} src="/CareerTechPage" />
        <LessonPlanCard subject={'Computing'} src="/ComputingPage" />
    </div>
  );
};

export default lessonPlan;
