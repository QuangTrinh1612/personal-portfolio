import React, { useState, useEffect, useRef } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const revealContainer = useRef(null);
  const tabs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.25 }
    );

    if (revealContainer.current) {
      observer.observe(revealContainer.current);
    }

    return () => {
      if (revealContainer.current) {
        observer.unobserve(revealContainer.current);
      }
    };
  }, []);

  useEffect(() => {
    const focusTab = () => {
      if (tabs.current[activeTabId]) {
        tabs.current[activeTabId].focus();
      }
    };
    focusTab();
  }, [activeTabId]);

  const jobs = [
    {
      title: 'Data Architect',
      company: 'Rackspace Technology',
      url: 'https://www.rackspace.com',
      range: 'April 2021 - Present',
      duties: [
        'Defined project scope, deliverables and plans with stakeholders while monitoring progress and mitigating risks',
        'Provided strategic advice and solutions for scalable infrastructure, establishing robust data governance, security protocols and networking architecture',
        'Architected scalable data platforms using Azure Cloud, Databricks, and Microsoft Fabric ecosystem',
        'Developed high-performance ETL frameworks for diverse data sources (SAP, Oracle Fusion, RDB, IoT)',
        'Led Microsoft Fabric and Power BI adoption initiatives for advanced analytics solutions',
        'Mentored team members while improving project management processes and operational efficiency'
      ],
    },
    {
      title: 'Senior Data Engineer',
      company: 'Shopee',
      url: 'https://shopee.vn/',
      range: 'June 2020 - April 2021',
      duties: [
        'Engineered PySpark scripts to efficiently query and analyze extensive datasets from diverse sources, including Excel, Presto, and third-party APIs',
        'Designed and developed Power BI reports, dashboards, and ad-hoc queries to provide insights on 3PL reconciliation, financial performance, inventory management, cash flow forecasting, and voucher utilization',
        'Partnered with Finance Controllers, HQ Finance Analysts, and local operations teams to align technical solutions with business objectives, reducing reporting time by 80%'
      ],
    },
    {
      title: 'Data Engineer',
      company: 'Athena System',
      url: 'https://unitedfintech.com/athena/',
      range: 'September 2018 - June 2020',
      duties: [
        'Managed operations for five hedge funds based in Hong Kong and Singapore, with Assets Under Management (AUM) ranging from USD 150 million to USD 220 million.',
        'Designed, developed, and supervised automated trading reports, custodian reconciliation processes, performance reports, asset valuation, and trade compliance frameworks.',
        'Conducted ad-hoc performance analysis and risk assessments to meet diverse client requirements.',
        'Collaborated with internal teams across Madrid and Boston, as well as external clients, to resolve data-related issues efficiently.'
      ],
    },
    {
      title: 'Financial Analyst',
      company: 'Vietcombank',
      url: 'https://www.vietcombank.com.vn',
      range: 'January 2017 - April 2019',
      duties: [
        'In charge of 12 clients with total credit balance of 600 billions VND',
        'Be responsible for evaluation of the financial performance of the clients, through analysis of Financial Statement, financial ratios, industry position, economic conditions and recommended the credit facilities',
        'Adhere to the banks credit policy guidelines and are appropriately priced and structured.',
        'Co-operate with other departments to manage and retain existing customers with the standard of customer service.',
        'Explore new opportunities through different business networks to achieve business targets.',
        'Querying data from internal sources by SQL, restructuring data, doing reports and building model forecasting the performance of the department to support manager on making strategy and conquering KPIs.'
      ],
    },
    {
      title: 'Audit Associate',
      company: 'Deloitte',
      url: 'https://www.deloitte.com',
      range: 'December 2014 - December 2016',
      duties: [
        'Perform statutory audits and advise operation processes of specified sectors: Financial services (Banks and Insurance Companies), Trading, Manufacturing.',
        'Review financial statements in accordance with VAS and IFRS, identify issues, define symptoms and recommend solutions.',
        'Assist senior members of the team and liaise with client executives, and financial professionals as required.',
        'Client Portfolio as Vietinbank, BIDV, PV Drilling, Pepperl & Fuchs, VNAirCaterers, MARSH'
      ],
    },
  ];

  return (
    <section id="experience" ref={revealContainer} className="experience fade-up">
      <h2 className="section-heading">Where I've Worked</h2>

      <div className="experience-content">
        <div role="tablist" aria-label="Job tabs" className="tab-list">
          {jobs.map((job, i) => (
            <button
              key={i}
              className={`tab-button ${activeTabId === i ? 'active' : ''}`}
              onClick={() => setActiveTabId(i)}
              ref={(el) => (tabs.current[i] = el)}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
            >
              <span>{job.company}</span>
            </button>
          ))}
          <div className="highlight" style={{ transform: `translateY(calc(${activeTabId} * 42px))` }}></div>
        </div>

        <div className="tab-panels">
          {jobs.map((job, i) => (
            <div
              key={i}
              className={`tab-panel ${activeTabId === i ? 'active' : ''}`}
              role="tabpanel"
              id={`panel-${i}`}
              aria-labelledby={`tab-${i}`}
              tabIndex={0}
              hidden={activeTabId !== i}
            >
              <h3>
                <span>{job.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={job.url} className="link-highlight">
                    {job.company}
                  </a>
                </span>
              </h3>

              <p className="range">{job.range}</p>

              <ul>
                {job.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;