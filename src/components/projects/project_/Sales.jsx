import React, { useState } from "react";

import sales from "../../../data/project_files/Sales/dashboard/supermarket_sales_analysis.pdf";

export default function Sales() {
  const [activeTab] = useState("");

  //download resume
  const handleDownload = () => {
    window.open(sales, "_blank");
  };

  return (
    <div className="p-4 sm:ml-64 sm:mr-35">
      <div className="container sales">
        <div className="heading mb-3">
          <h3 className="text-lg font-semibold underline">
            Supermarket sales analysis
          </h3>
        </div>
        <div class="flex items-center gap-x-4 text-xs mb-2">
          <time datetime="2020-03-16" class="text-gray-500 mt-2">
            27 February 2024
          </time>
          <a
            href="#"
            class="relative z-10 rounded-full px-2 py-1 font-medium text-yellow-400 hover:bg-gray-100"
          >
            # SQL + PowerBi
          </a>
        </div>
        <div class="flex items-center gap-4 mt-2">
          <img
            class="w-10 h-10 rounded-full"
            src="../images/unnamed.png"
            alt=""
          />
          <div class="font-medium text-white">
            <div>Isaac Mhlanga</div>
            <div class="text-sm text-gray-500">i.mhlanga@icloud.com</div>
          </div>
        </div>
        <hr className="text-gray-300"></hr>
        <h3 className="text-lg font-semibold underline">About Dataset</h3>
        <p className="mb-5">
          The growth of supermarkets in most populated cities are increasing and
          market competitions are also high. The dataset is one of the
          historical sales of supermarket company which has recorded in 3
          different branches for 3 months data.
          <br></br>
          <a
            href="https://www.kaggle.com/datasets/aungpyaeap/supermarket-sales"
            target="_blank"
          >
            read more about the dataset<i class="fas fa-arrow-right ml-1"></i>
          </a>
        </p>

        <h3 className="text-lg font-semibold underline">Project Objective:</h3>
        <div className="objective card p-3 mb-5">
          <p className="mt-2">
            # The objective of this project was to extract a dataset from
            Kaggle, import it into SQL Workbench, establish a connection to
            Power BI, and then conduct various queries and power queries for
            transfomations, load and do some visualisation.
          </p>
        </div>

        <h3 className="text-lg font-semibold underline">Introduction</h3>

        <p className="mb-5">
          This report analyzes the sales data of a supermarket company recorded
          across three branches A, B, and C in highly populated cities. The
          dataset spans three months, from January 2019 to March 2019, and
          includes attributes such as branch location, customer type, product
          line, purchase details, and customer satisfaction ratings. The aim is
          to gain actionable insights to enhance business performance and
          competitiveness in a dynamic market landscape.
        </p>

        <h3 className="text-lg font-semibold underline">Analysis Results</h3>

        <div className="mt-4">
          <iframe
            title="supermarket sales analysis"
            width="full"
            className="w-full border-2 border border-[#98a0b3] p-2"
            height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=cb139cb3-7c39-4f6c-80d3-81fda07d7310&autoAuth=true&ctid=d8bf7c18-5725-4b9e-b118-13388f52e44e"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>

          <div className="d-flex mb-5 mt-3 button-container">
            <a
              className={`btn btn-primary adminBtn btn-lg mr-2 ${
                activeTab === "home" ? "active" : ""
              }`}
              onClick={handleDownload}
            >
              <i class="fab fa-github mr-2"></i> project files
            </a>

            <a
              className={`btn btn-primary adminBtn btn-lg mr-2 ${
                activeTab === "projects" ? "active" : ""
              }`}
              onClick={handleDownload}
            >
              <i class="far fa-file-pdf mr-2"></i>
              View pdf file
            </a>
          </div>
        </div>

        <h3 className="text-lg font-semibold underline">
          Overall Sales Performance
        </h3>

        <p className="mb-5">
          Branch C contributed the highest revenue, followed by Branch A and
          Branch B. Sales showed a decrease trend in February, with all branches
          experiencing a decrease, followed by an increase again in March.
          Further analysis will help determine the cause of the decrease in
          February.
        </p>

        <h3 className="text-lg font-semibold underline">
          Product Category Analysis
        </h3>

        <p className="mb-5">
          'Food and beverages' in branch C emerged as the top-performing
          category, followed by 'Home and lifestyle' in branch A and 'Sports and
          travel' in branch B.
        </p>

        <h3 className="text-lg font-semibold underline">
          Customer Demographics
        </h3>

        <p className="mb-5">
          The majority of customers were 'Members' shoppers, accounting for
          50.85% of the total, followed by 24.69% being female normal customers
          and 24.46% being male normal customers. Additionally, 23.56% of
          customers were male members, indicating a mix of repeat and one-time
          customers.
        </p>

        <h3 className="text-lg font-semibold underline">Purchase Patterns</h3>

        <p className="mb-5">
          The busiest shopping hours were between 1 PM to 5 PM, reflecting
          customer preferences for after-work shopping.
        </p>

        <h3 className="text-lg font-semibold underline">Conclusion</h3>
        <p className="mb-5">
          Branch C led in revenue, trailed by Branch A and Branch B. Despite a
          February sales decline across all branches, March saw a recovery.
          Targeted analysis is needed to understand the February downturn.
          <br></br> 'Food and beverages' excelled in Branch C, 'Home and
          lifestyle' in Branch A, and 'Sports and travel' in Branch B. The
          majority of shoppers were 'Members,' indicating loyalty, but there's a
          mix of repeat and one-time customers across genders. Peak shopping
          hours were between 1 PM to 5 PM, suggesting after-work shopping
          preferences.
        </p>

        <h3 className="text-lg font-semibold underline">Suggestions:</h3>
        <div className="suggestions card p-2">
          <ul className="list-disc mt-3">
            <li>
              Investigate February's sales decline to identify underlying
              factors.
            </li>
            <li>Promote top-performing categories.</li>
            <li>
              Develop targeted marketing to convert one-time customers to
              members.
            </li>
            <li>Optimize staffing and inventory during peak hours.</li>
            <li>
              Consider expanding product offerings to meet evolving customer
              needs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
