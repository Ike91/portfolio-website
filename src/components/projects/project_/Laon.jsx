import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Laon() {
  return (
    <div className="p-1 sm:ml-64 sm:mr-35">
      <div className="container sales">
        <div class="flex items-center gap-x-4 text-xs mb-2">
          <time datetime="2020-03-16" class="text-gray-500 mt-2">
            27 February 2024
          </time>
          <a
            href="#"
            class="relative z-10 rounded-full px-2 py-1 font-medium text-yellow-400 hover:bg-gray-100"
          >
            Python, pandas, numpy [EDA]
          </a>
        </div>
        <div className="heading mb-3">
          <h3 className="text-xl font-semibold ">Home Loan Approval</h3>
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
        <hr className="text-gray-100" />
        <section className="mt-5">
          <h3 className="text-lg font-semibold">About Dataset</h3>
          <p className="mb-5">
            Dream Housing Finance company deals in all home loans. They have a
            presence across all urban, semi-urban and rural areas. The customer
            first applies for a home loan after that company validates the
            customer's eligibility for a loan.
            <br />
          </p>
        </section>
        <section className="retain p-3 rounded-md border border-gray-700">
          <h3 className="text-lg font-semibold mb-3">Problem</h3>
          <p className="mt-2">
            The company wants to automate the loan eligibility process
            (real-time) based on customer detail provided while filling out the
            online application form. These details are Gender, Marital Status,
            Education, Number of Dependents, Income, Loan Amount, Credit History
            and others. To automate this process, they have given a problem
            identifying the customer segments eligible for loan amounts to
            target these customers specifically.
          </p>
        </section>

        <section className="mt-5 rounded-md">
          <h3 className="text-lg font-semibold mb-3">loading the data</h3>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
import numpy as np
import pandas as pd 
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split

train_data = pd.read_csv("../Data/Train data/loan_sanction_train.csv")
            `}
          </SyntaxHighlighter>
        </section>

        <section className="mt-5 rounded-md">
          <h3 className="text-lg font-semibold mb-3">
            Data cleaning and data preparation (Data Wrangling)
          </h3>
          <p className="mt-2">
            Clean and preprocess the data to ensure it is accurate, consistent,
            and usable for analysis. This involves handling missing values,
            removing duplicates, correcting errors, and normalizing data
            formats.
          </p>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
#This method will give me the first 5 rows of the data set to get the feel of it.            
train_data.head()

#This method will give me the last 5 rows of the dataset
train_data.tail()

#This method  returns a concise summary of the DataFrame, including information about the index, 
#columns, data types, memory usage, and non-null values.
train_data.info()

            `}
          </SyntaxHighlighter>
          <p className="mt-2">
            Clean and preprocess the data to ensure it is accurate, consistent,
          </p>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
#returns the count of missing values (NaN values) for each column in the clean_train_data
train_data.isnull().sum()

#This method removes rows from the DataFrame where any element is missing (NaN).
#After executing this line, clean_train_data will contain a new DataFrame where any 
#row that had at least one missing value (NaN) in any column has been dropped. 
#This operation effectively creates a"cleaned" version of the original DataFrame, 
#where missing values have been removed
clean_train_data = train_data.dropna()

#This method identifies duplicated rows in the DataFrame clean_train_data. 
#It returns a boolean Series where each element is True if the corresponding 
#row is a duplicate of a previous row, and False otherwise. In this case no duplicates.
clean_train_data.duplicated().any(),
            `}
          </SyntaxHighlighter>
        </section>
        <section className="mt-5 rounded-md">
          <h3 className="text-lg font-semibold mb-3">
            Data Exploration and Analysis ( EDA )
          </h3>
          <p className="mt-2">
            In this stage we perform exploratory data analysis (EDA) to
            understand the data's underlying patterns, relationships, and
            anomalies. This step often involves statistical analysis, data
            visualization, and the use of descriptive analytics techniques.
          </p>
          <h3 className="text-lg font-semibold mb-3">Univariate Analysis</h3>
          <p className="mt-2">
            Univariate analysis involves analyzing a single variable at a time,
            examining its characteristics and distribution within the dataset.
            This initial step allows us to gain insights into individual
            variables before proceeding to more complex analyses.
          </p>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
#generates descriptive statistics that summarize the central tendency, dispersion, 
#and shape of the dataset's distribution, excluding NaN values.            
clean_train_data.describe()

#max: Returns the maximum value of the 'ApplicantIncome' column.
#min: Returns the minimum value of the 'ApplicantIncome' column.
#median: Returns the median value of the 'ApplicantIncome' column.
clean_train_data['ApplicantIncome'].agg(['max', 'min', 'median'])

#This will plot a histogram of applicant income
plt.figure(figsize=(10, 6))
sns.histplot(data = clean_train_data, x='ApplicantIncome', kde=True)
plt.title("Applicant Income distribution")
plt.ylabel("Frequency")
plt.xlabel("Applicant income")
plt.show
            `}
          </SyntaxHighlighter>
          <div className="row">
            <div className="col-md-12 mt-2">
              <img
                className="border p-2 w-full"
                src="../projects/Loan/output1.png"
                alt=""
              />
            </div>
          </div>
          <p className="mt-2">
            Most of the applicant incomes range between 150 and 10,000.
            Additionally, it's worth noting that there is an outlier with an
            income of 81,000.
          </p>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
#Thi will plot the loan amaount histogram            
plt.figure(figsize=(10, 6))
sns.histplot(data=clean_train_data, x='LoanAmount', kde=True)
plt.title("Loan amount distribution")
plt.xlabel("Laon amount")
plt.ylabel("Frequency")
plt.show()
            `}
          </SyntaxHighlighter>
          <div className="row">
            <div className="col-md-12 mt-2">
              <img
                className="border p-2 w-full"
                src="../projects/Loan/output2.png"
                alt=""
              />
            </div>
          </div>
          <p className="mt-2">
            Most of the loan amounts fall within the range of 9 to 200, and
            there are no outliers detected.
          </p>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
## Create a pie chart
plt.pie(x=married_count.values, labels=married_count.index, autopct="%0.2f%%",  shadow=True, explode=(0, 0.05))

# title
plt.title("Marital Status Distribution")

## Customize the styling
plt.axis("equal")  # Set the aspect ratio to make the pie circular

## Add a legend
plt.legend(loc='best')

## Show the plot
plt.show()


plt.pie(x=gender_count.values, labels=gender_count.index, autopct="%0.2f%%", shadow=True, explode=(0, 0.05))
plt.axis("equal")
## Add a legend
plt.legend(loc='best')
plt.show
            `}
          </SyntaxHighlighter>
          <div className="row">
            <div className="col-md-6 mt-2">
              <img
                className="border p-2 w-full"
                src="../projects/Loan/output3.png"
                alt=""
              />
            </div>
            <div className="col-md-6 mt-2">
              <img
                className="border p-2 w-full"
                src="../projects/Loan/output4.png"
                alt=""
              />
            </div>
          </div>
          <p className="mt-2">
            Most of the loan applicants are married, comprising 64.78% of the
            total applicants. Additionally, it is evident that the majority of
            the applicants are male, constituting 81.36% of the total.
          </p>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
## Calculate the normalized value counts of "Education"
education_count = clean_train_data["Education"].value_counts(normalize=True).to_frame()

sns.barplot(x=education_count.index, y="proportion", data=education_count)

plt.xlabel("Education")
plt.ylabel("Proportion")
plt.title("Distribution of Education", weight="bold")

## Show the plot
plt.show()

loan_status_count = clean_train_data['Loan_Status'].value_counts()
plt.pie(x=loan_status_count.values, labels=loan_status_count.index, autopct="%0.2f%%", shadow=True, explode=(0, 0.05))
plt.title("Distribution of Loan Eligibility")
plt.axis("equal")
plt.legend(loc='best')
plt.show
            `}
          </SyntaxHighlighter>
          <div className="row">
            <div className="col-md-6 mt-2">
              <img
                className="border p-2 w-full"
                src="../projects/Loan/output5.png"
                alt=""
              />
            </div>
            <div className="col-md-6 mt-2">
              <img
                className="border p-2 w-full"
                src="../projects/Loan/output7.png"
                alt=""
              />
            </div>
          </div>
          <p className="mt-2">
            Most Loan Applicants Are Graduates Compared to Non-Graduates, with a
            Total of 69.17% Being Eligible for a Loan.
          </p>
        </section>
        <section className="mt-5">
          <h3 className="text-lg font-semibold mb-3">Bivariate Analysis</h3>
          <p className="mt-2">
            Bivariate analysis entails examining the relationship between two
            variables simultaneously. Our focus is on understanding how one
            variable behaves concerning another. This represents the next phase
            of our analysis
          </p>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
## Group the data by "Gender" and "Loan_Status" and calculate the count
loan_status_count = pd.crosstab(clean_train_data['Gender'], clean_train_data['Loan_Status'])

## bar plot
loan_status_count.plot(kind="bar", stacked=False)

## labels and title
plt.xlabel("Gender")
plt.ylabel("Count")
plt.title("Loan eligibility count by gender")

## Show the plot
plt.show()

clean_train_data.groupby(["Education", "Loan_Status"])["Loan_Status"].count()
# Creating a count plot for "Loan_Status" with the hue based on "Education"
sns.countplot(data=clean_train_data, x="Loan_Status", hue="Education")
plt.xlabel("Loan Status")  
plt.ylabel("Count")          
plt.title("Loan eligibility by Education")  
plt.legend(title="Education", loc="upper right") 
plt.show()

            `}
          </SyntaxHighlighter>
          <div className="row">
            <div className="col-md-6 mt-2">
              <img
                className="border p-2 w-full"
                src="../projects/Loan/output8.png"
                alt=""
              />
            </div>
            <div className="col-md-6 mt-2">
              <img
                className="border p-2 w-full"
                src="../projects/Loan/output9.png"
                alt=""
              />
            </div>
          </div>
          <p className="mt-2">
            It's clear that people who graduated are more likely to be eligible
            compared to those who didn't. Also, those without any credit history
            are more likely to be eligible compared to those who have one.
            <br></br>A connection between these two could be that education and
            credit history both show how responsible someone is with money.
            Graduates usually earn more and are seen as safer to lend money to.
            Similarly, people without a credit history might not have any bad
            marks against them, which makes them look better to lenders compared
            to people who have a history of missing payments or not paying back
            loans.
          </p>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
## Create a scatter plot
sns.scatterplot(data=clean_train_data, x="ApplicantIncome", y="LoanAmount")

## labels and title
plt.xlabel("Applicant Income")
plt.ylabel("Loan Amount")
plt.title("Relationship between Applicant Income and Loan Amount")

## style settings
plt.grid(True, linestyle="-")  # Add grid lines
plt.xlim(0, 80000)  # Set the x-axis limits
plt.ylim(0, 600)  # Set the y-axis limits

## Show the plot
plt.show()

          `}
          </SyntaxHighlighter>
          <div className="row">
            <div className="col-md-12 mt-2">
              <img
                className="border p-2 w-full"
                src="../projects/Loan/output11.png"
                alt=""
              />
            </div>
          </div>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
plt.figure(figsize=(15, 8))
ax = sns.countplot(data=clean_train_data, x="Dependents", hue="Loan_Status")

## plot customize
ax.set_title("Loan Status by Dependents")
ax.set_xlabel("Number of dependents")
ax.set_ylabel("Count")
ax.legend(title="Loan Status", labels=["Approved", "Not Approved"])  ## legend labels
ax.set_xticklabels(ax.get_xticklabels(), rotation=45)  # Rotate x-axis labels 

# Add data labels
for p in ax.patches:
    ax.annotate(f'{p.get_height()}', (p.get_x() + p.get_width() / 2., p.get_height()),
                ha='center', va='center', fontsize=12, color='black', xytext=(0, 10),
                textcoords='offset points')

# Show the plot
plt.show

          `}
          </SyntaxHighlighter>
          <div className="row">
            <div className="col-md-12 mt-2">
              <img
                className="border p-2 w-full"
                src="../projects/Loan/output10.png"
                alt=""
              />
            </div>
          </div>
          <p className="mt-2">
            As evident from the graph above, applicants with fewer dependents
            have a higher likelihood of approval compared to those with a higher
            number of dependents. As the number of dependents increases, the
            chances of approval decrease.
            <br></br>
            One possible cause for this trend could be that applicants with
            fewer dependents may have lower financial obligations, making them
            appear as lower-risk borrowers to lenders. On the other hand,
            applicants with more dependents may have higher financial
            responsibilities, leading to a perceived higher risk for lenders.
          </p>
        </section>
        <section className="mt-5">
          <h3 className="text-lg font-semibold mb-3">
            {" "}
            Feature Engineering and Selection
          </h3>
          <p className="mt-2">
            Create new features (variables) from the existing data that could
            improve the model's performance and select the most relevant
            features for the analysis.
          </p>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
from sklearn.model_selection import train_test_split

X = data.drop("Loan_Status", axis=1)
y = data["Loan_Status"] ## Target

## split the data to train and test(even though I have the test data)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size =0.2, random_state=42, stratify=y)

y_train = y_train.map({"Y":1, "N":0})
y_test = y_test.map({"Y":1, "N":0})

          `}
          </SyntaxHighlighter>

          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
Numerical_columns = X.select_dtypes(include="number").columns.to_list()
Categorical_columns = X.select_dtypes(exclude="number").columns.to_list()

          `}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OrdinalEncoder, RobustScaler
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.impute import KNNImputer


# Categorical pipeline
categorical_pipeline = Pipeline(steps=[
    ("impute", SimpleImputer(strategy="most_frequent")),
    ("encoder", OrdinalEncoder(handle_unknown='use_encoded_value', unknown_value=-1)) 
])

# Numeric pipeline
numerical_pipeline = Pipeline(steps=[
    ("impute", SimpleImputer(strategy="median")),  
    ("scaler", StandardScaler())  # Standardize features by removing the mean and scaling to unit variance
])

# Define a ColumnTransformer to handle both numerical and categorical columns
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numerical_pipeline, Numerical_columns),
        ('cat', categorical_pipeline, Categorical_columns)
    ])

# Now you can fit and transform your data using this preprocessor
X_train_final = preprocessor.fit_transform(X_train)
X_test_final = preprocessor.transform(X_test)

          `}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`

class NumericalTransformer(BaseEstimator, TransformerMixin):
    def __init__(self, columns):
        self.columns = columns

    def fit(self, X, y=None):
        return self

    def transform(self, X):
        return X[self.columns]

numerical_pipeline = Pipeline(steps=[
    ("selector", NumericalTransformer(Numerical_columns)),
    ("impute", KNNImputer(n_neighbors=5)),
    ("scaler", RobustScaler())
])

X_train_transformed = numerical_pipeline.fit_transform(X_train)

          `}
          </SyntaxHighlighter>
          <h3 className="text-lg font-semibold mb-3 mt-5">
            Modeling Using Decision Tree
          </h3>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`

from sklearn.tree import DecisionTreeClassifier

clf = DecisionTreeClassifier(ccp_alpha=0.01, splitter="best")
clf.fit(X_train_final, y_train)

train_predictions = clf.predict(X_train_final)
test_predictions = clf.predict(X_test_final)

          `}
          </SyntaxHighlighter>

          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`

from sklearn.metrics import accuracy_score

# Accuracy Score
train_accuracy = accuracy_score(y_train, train_predictions)
test_accuracy = accuracy_score(y_test, test_predictions)
print(f"Accuracy of Training Data : {train_accuracy*100} %")
print(f"Accuracy of Test Data : {test_accuracy*100} %")

          `}
          </SyntaxHighlighter>
          <p>
            Accuracy of Training Data : 80.20833333333334 %<br></br>
            Accuracy of Test Data : 83.33333333333334 %
          </p>
        </section>
      </div>
    </div>
  );
}
