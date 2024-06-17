import React from 'react'
import ExprerienceCard from './ExprerienceCard'
import data from '../data/Data'

const Experience = () => {
  return (
    <section>
        <div className='container'>
            <div className='border border-[var(--yellow)] rounded-[16px]'>
            <ExprerienceCard exp_status={data?.exp_status.exp_status_1} exp_company={data?.exp_company.exp_company_1} exp_date={data?.exp_date.exp_date_1} />
            <ExprerienceCard exp_status={data?.exp_status.exp_status_2} exp_company={data?.exp_company.exp_company_2} exp_date={data?.exp_date.exp_date_2} />
            <ExprerienceCard exp_status={data?.exp_status.exp_status_3} exp_company={data?.exp_company.exp_company_3} exp_date={data?.exp_date.exp_date_3}/>
            </div>
        </div>
    </section>
  )
}

export default Experience