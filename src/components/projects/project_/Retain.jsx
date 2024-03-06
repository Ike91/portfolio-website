import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function TitanicSurvivalAnalysis() {
  return (
    <div className="p-4 sm:ml-64 sm:mr-35">
      <div className="container sales">
        <div className="heading mb-3">
          <h3 className="text-lg font-semibold underline">
            Titanic Survival Analysis
          </h3>
        </div>
        <div className="meta-info flex items-center gap-x-4 text-xs mb-2">
          <time dateTime="2020-03-16" className="text-gray-500 mt-2">
            27 February 2024
          </time>
          <a
            href="#"
            className="relative z-10 rounded-full px-2 py-1 font-medium text-yellow-400 hover:bg-gray-100"
          >
            Python
          </a>
        </div>
        <div className="author-info flex items-center gap-4 mt-2">
          <img
            className="w-10 h-10 rounded-full"
            src="../images/unnamed.png"
            alt="Author"
          />
          <div className="font-medium text-white">
            <div>Isaac Mhlanga</div>
            <div className="text-sm text-gray-500">i.mhlanga@icloud.com</div>
          </div>
        </div>
        <hr className="text-gray-300" />
        <section>
          <h3 className="text-lg font-semibold underline">About Dataset</h3>
          <p className="mb-5">
            The Titanic Passenger dataset provides information about passengers
            who were aboard the RMS Titanic during its ill-fated maiden voyage.
            <br />
            <a
              href="https://www.kaggle.com/datasets/shubhamgupta012/titanic-dataset"
              target="_blank"
              rel="noreferrer"
            >
              Read more about the dataset{" "}
              <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </p>
        </section>
        <section>
          <h3 className="text-lg font-semibold underline">
            Project Objective:
          </h3>
          <div className="objective card p-3 mb-5">
            <p className="mt-2">
              The objective of this project is to analyze the Titanic passenger
              dataset to investigate the factors influencing survival rates
              among passengers.
            </p>
            <ul className="list-disc mt-2">
              <li>
                Which passenger class has the maximum number of survivors?
              </li>
              <li>
                What is the distribution, based on gender, of the survivors
                among the different classes?
              </li>
              <li>
                What is the distribution of the nonsurvivors among classes that
                have relatives aboard the ship?
              </li>
              <li>
                What is the survival percentage among different age groups?
              </li>
            </ul>
          </div>
        </section>
        <section className="analysis">
          <h3 className="text-lg font-semibold underline">Dtat exploration</h3>
          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

df = pd.read_csv('C:/Users/Ike/Documents/Academics/Learning/Data analysis/Projects/New folder/SVMtrain.csv')
            `}
          </SyntaxHighlighter>
          <p className="mt-5">
            I display the first few rows of the DataFrame using the
            <code> head()</code> method to get a sense of the data.
          </p>
          <SyntaxHighlighter
            className="mt-4 mb-4"
            language="python"
            style={vscDarkPlus}
          >
            {`df.head()`}
          </SyntaxHighlighter>
          <table border="1" className="dataframe">
            <thead>
              <tr style={{ textAlign: "right" }}>
                <th scope="col">PassengerId</th>
                <th scope="col">Survived</th>
                <th scope="col">Pclass</th>
                <th scope="col">Sex</th>
                <th scope="col">Age</th>
                <th scope="col">SibSp</th>
                <th scope="col">Parch</th>
                <th scope="col">Fare</th>
                <th scope="col">Embarked</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="PassengerId">1</td>
                <td data-label="Survived">0</td>
                <td data-label="Pclass">3</td>
                <td data-label="Sex">Male</td>
                <td data-label="Age">22.0</td>
                <td data-label="SibSp">1</td>
                <td data-label="Parch">0</td>
                <td data-label="Fare">7.2500</td>
                <td data-label="Embarked">3</td>
              </tr>
              <tr>
                <td data-label="PassengerId">2</td>
                <td data-label="Survived">1</td>
                <td data-label="Pclass">1</td>
                <td data-label="Sex">female</td>
                <td data-label="Age">38.0</td>
                <td data-label="SibSp">1</td>
                <td data-label="Parch">0</td>
                <td data-label="Fare">71.2833</td>
                <td data-label="Embarked">1</td>
              </tr>
              <tr>
                <td data-label="PassengerId">3</td>
                <td data-label="Survived">1</td>
                <td data-label="Pclass">3</td>
                <td data-label="Sex">female</td>
                <td data-label="Age">26.0</td>
                <td data-label="SibSp">0</td>
                <td data-label="Parch">0</td>
                <td data-label="Fare">7.9250</td>
                <td data-label="Embarked">3</td>
              </tr>
              <tr>
                <td data-label="PassengerId">4</td>
                <td data-label="Survived">1</td>
                <td data-label="Pclass">1</td>
                <td data-label="Sex">female</td>
                <td data-label="Age">35.0</td>
                <td data-label="SibSp">1</td>
                <td data-label="Parch">0</td>
                <td data-label="Fare">53.1000</td>
                <td data-label="Embarked">3</td>
              </tr>
              <tr>
                <td data-label="PassengerId">5</td>
                <td data-label="Survived">0</td>
                <td data-label="Pclass">3</td>
                <td data-label="Sex">Male</td>
                <td data-label="Age">35.0</td>
                <td data-label="SibSp">0</td>
                <td data-label="Parch">0</td>
                <td data-label="Fare">8.0500</td>
                <td data-label="Embarked">3</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-5">
            Here I notice that the gender column has inconsistent capitalization
            for male and female values, which is not consistent. As a result, I
            have to capitalize the first letter of female.
          </p>

          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`df['Sex'] = df['Sex'].str.capitalize() `}
          </SyntaxHighlighter>

          <p className="mt-5">
            Here, I use <code>df.describe()</code> to describe the numerical
            characteristics of my DataFrame.
          </p>
          <SyntaxHighlighter
            className="mt-4 mb-4"
            language="python"
            style={vscDarkPlus}
          >
            {`df.describe()`}
          </SyntaxHighlighter>
          <table border="1" class="dataframe">
            <thead>
              <tr style={{ textAlign: "right" }}>
                <th scope="col"></th>
                <th scope="col">PassengerId</th>
                <th scope="col">Survived</th>
                <th scope="col">Pclass</th>
                <th scope="col">Age</th>
                <th scope="col">SibSp</th>
                <th scope="col">Parch</th>
                <th scope="col">Fare</th>
                <th scope="col">Embarked</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>count</th>
                <td data-label="PassengerId">889.000000</td>
                <td data-label="Survived">889.000000</td>
                <td data-label="Pclass">889.000000</td>
                <td data-label="Age">889.000000</td>
                <td data-label="SibSp">889.000000</td>
                <td data-label="Parch">889.000000</td>
                <td data-label="Fare">889.000000</td>
                <td data-label="Embarked">889.000000</td>
              </tr>
              <tr>
                <th>mean</th>
                <td data-label="PassengerId">446.000000</td>
                <td data-label="Survived">0.382452</td>
                <td data-label="Pclass">2.311586</td>
                <td data-label="Age">35.686355</td>
                <td data-label="SibSp">0.524184</td>
                <td data-label="Parch">0.382452</td>
                <td data-label="Fare">32.096681</td>
                <td data-label="Embarked">2.535433</td>
              </tr>
              <tr>
                <th>std</th>
                <td data-label="PassengerId">256.998173</td>
                <td data-label="Survived">0.486260</td>
                <td data-label="Pclass">0.834700</td>
                <td data-label="Age">17.756733</td>
                <td data-label="SibSp">1.103705</td>
                <td data-label="Parch">0.806761</td>
                <td data-label="Fare">49.697504</td>
                <td data-label="Embarked">0.792088</td>
              </tr>
              <tr>
                <th>min</th>
                <td data-label="PassengerId">1.000000</td>
                <td data-label="Survived">0.000000</td>
                <td data-label="Pclass">1.000000</td>
                <td data-label="Age">0.420000</td>
                <td data-label="SibSp">0.000000</td>
                <td data-label="Parch">0.000000</td>
                <td data-label="Fare">0.000000</td>
                <td data-label="Embarked">1.000000</td>
              </tr>
              <tr>
                <th>25%</th>
                <td data-label="PassengerId">224.000000</td>
                <td data-label="Survived">0.000000</td>
                <td data-label="Pclass">2.000000</td>
                <td data-label="Age">22.000000</td>
                <td data-label="SibSp">0.000000</td>
                <td data-label="Parch">0.000000</td>
                <td data-label="Fare">7.895800</td>
                <td data-label="Embarked">2.000000</td>
              </tr>
              <tr>
                <th>50%</th>
                <td data-label="PassengerId">446.000000</td>
                <td data-label="Survived">0.000000</td>
                <td data-label="Pclass">3.000000</td>
                <td data-label="Age">32.000000</td>
                <td data-label="SibSp">0.000000</td>
                <td data-label="Parch">0.000000</td>
                <td data-label="Fare">14.454200</td>
                <td data-label="Embarked">3.000000</td>
              </tr>
              <tr>
                <th>75%</th>
                <td data-label="PassengerId">668.000000</td>
                <td data-label="Survived">1.000000</td>
                <td data-label="Pclass">3.000000</td>
                <td data-label="Age">54.000000</td>
                <td data-label="SibSp">1.000000</td>
                <td data-label="Parch">0.000000</td>
                <td data-label="Fare">31.000000</td>
                <td data-label="Embarked">3.000000</td>
              </tr>
              <tr>
                <th>max</th>
                <td data-label="PassengerId">891.000000</td>
                <td data-label="Survived">1.000000</td>
                <td data-label="Pclass">3.000000</td>
                <td data-label="Age">80.000000</td>
                <td data-label="SibSp">8.000000</td>
                <td data-label="Parch">6.000000</td>
                <td data-label="Fare">512.329200</td>
                <td data-label="Embarked">3.000000</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-5">
            Upon further exploration of my dataset, I confirmed that there are
            no missing values present.
          </p>
          <SyntaxHighlighter
            className="mt-4 mb-4"
            language="python"
            style={vscDarkPlus}
          >
            {`df.isnull().value_counts()`}
          </SyntaxHighlighter>
          <table border="1" class="dataframe">
            <thead>
              <tr>
                <th scope="col">Column</th>
                <th scope="col">Has Missing Values</th>
                <th scope="col">Number of Missing Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Column">PassengerId</td>
                <td data-label="Has Missing Values">False</td>
                <td data-label="Number of Missing Values">0</td>
              </tr>
              <tr>
                <td data-label="Column">Survived</td>
                <td data-label="Has Missing Values">False</td>
                <td data-label="Number of Missing Values">0</td>
              </tr>
              <tr>
                <td data-label="Column">Pclass</td>
                <td data-label="Has Missing Values">False</td>
                <td data-label="Number of Missing Values">0</td>
              </tr>
              <tr>
                <td data-label="Column">Sex</td>
                <td data-label="Has Missing Values">False</td>
                <td data-label="Number of Missing Values">0</td>
              </tr>
              <tr>
                <td data-label="Column">Age</td>
                <td data-label="Has Missing Values">False</td>
                <td data-label="Number of Missing Values">0</td>
              </tr>
              <tr>
                <td data-label="Column">SibSp</td>
                <td data-label="Has Missing Values">False</td>
                <td data-label="Number of Missing Values">0</td>
              </tr>
              <tr>
                <td data-label="Column">Parch</td>
                <td data-label="Has Missing Values">False</td>
                <td data-label="Number of Missing Values">0</td>
              </tr>
              <tr>
                <td data-label="Column">Fare</td>
                <td data-label="Has Missing Values">False</td>
                <td data-label="Number of Missing Values">0</td>
              </tr>
              <tr>
                <td data-label="Column">Embarked</td>
                <td data-label="Has Missing Values">False</td>
                <td data-label="Number of Missing Values">0</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-5">
            Now that I am familiar with my data and it's ready for analysis, I
            can go ahead and answer the questions I intend to address.
          </p>
        </section>
        <section className="analysis mt-5">
          <h3 className="text-lg font-semibold underline">
            Which passenger class has the maximum number of survivors
          </h3>
          <p>
            To answer this question, I will construct a simple bar plot of the
            number of survivors and the percentage of survivors in each class,
            respectively.
          </p>

          <SyntaxHighlighter
            className="mt-4"
            language="python"
            style={vscDarkPlus}
          >
            {`
survivors = df['Survived'].groupby(df['Pclass']).agg(sum)

# Total Passengers in each class
total_passengers = df['PassengerId'].groupby(df['Pclass']).count()
survivor_percentage = survivors / total_passengers

# Plotting the Total number of survivors
fig = plt.figure()
ax = fig.add_subplot(111)
rect = ax.bar(survivors.index.values.tolist(), survivors, color='blue', width=0.5)
ax.set_ylabel('No. of survivors')
ax.set_title('Total number of survivors based on class')
xTickMarks = survivors.index.values.tolist()
ax.set_xticks(survivors.index.values.tolist())

#Plotting the percentage of survivors in each class
fig = plt.figure()
ax = fig.add_subplot(111)
rect = ax.bar(survivor_percentage.index.values.tolist(), survivor_percentage, color='blue', width=0.5)
ax.set_ylabel('Survivor Percentage')
ax.set_title('Percentage of survivors based on class')
xTickMarks = survivors.index.values.tolist()
ax.set_xticks(survivors.index.values.tolist())
xtickNames = ax.set_xticklabels(xTickMarks)
plt.show()
            `}
          </SyntaxHighlighter>

          <div className="visualization">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="border p-2"
                  src="../projects/Titanic/output 1.png"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <img
                  className="border p-2 "
                  src="../projects/Titanic/output.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="observations">
            <h3 className="mt-5">These are our observations:</h3>
            <div className="card p-2">
              <ul className="list-disc mt-3">
                <li>
                  The maximum number of survivors are in the first and third
                  class, respectively.
                </li>
                <li>
                  With respect to the total number of passengers in each class,
                  first class has the maximum survivors at around 61%.
                </li>
                <li>
                  With respect to the total number of passengers in each class,
                  third class has the minimum number of survivors at around 25%.
                </li>
              </ul>
            </div>
            <h3 className="mt-5">This is our key takeaway:</h3>
            <div className="card p-3">
              <p>
                There was clearly a preference toward saving those from the
                first class as the ship was drowning. It also had the maximum
                percentage of survivors.
              </p>
            </div>
          </div>
          <section>
            <h3 className="text-lg font-semibold underline mt-5">
              What is the distribution of survivors based on gender among the
              various classes?
            </h3>
            <p>
              To answer this question, I will use the following code to plot a
              side-by-side bar chart to compare the survival rate and percentage
              among men and women with respect to the class they were in.
            </p>
            <SyntaxHighlighter
              className="mt-4"
              language="python"
              style={vscDarkPlus}
            >
              {`
# Capitalize the 'Sex' column values
male_survivors = df[df['Sex'] == 'Male'].groupby('Pclass')['Survived'].agg(sum)

#Total Male Passengers in each class
male_total_passengers = df[df['Sex'] == 'Male'].groupby('Pclass')['PassengerId'].count()
male_survivor_percentage = male_survivors / male_total_passengers

# Female Passengers survived in each class
female_survivors = df[df['Sex'] == 'Female'].groupby('Pclass')['Survived'].agg(sum)

#Total Female Passengers in each class
female_total_passengers = df[df['Sex'] == 'Female'].groupby('Pclass')['PassengerId'].count()
female_survivor_percentage = female_survivors / female_total_passengers

#Plotting the total passengers who survived based on Gender
fig = plt.figure()
ax = fig.add_subplot(111)
index = np.arange(male_survivors.count())
bar_width = 0.35
rect1 = ax.bar(index, male_survivors, bar_width, color='blue', label='Men')
rect2 = ax.bar(index + bar_width, female_survivors, bar_width, color='y', label='Women')
ax.set_ylabel('Survivor Numbers')
ax.set_title('Male and Female survivors based on class')
xTickMarks = male_survivors.index.values.tolist()
ax.set_xticks(index + bar_width)
xtickNames = ax.set_xticklabels(xTickMarks)
plt.legend()
plt.tight_layout()
plt.show()

#Plotting the percentage of passengers who survived based on Gender
fig = plt.figure()
ax = fig.add_subplot(111)
index = np.arange(male_survivor_percentage.count())
bar_width = 0.35
rect1 = ax.bar(index, male_survivor_percentage, bar_width,  color='blue', label='Men')
rect2 = ax.bar(index + bar_width, female_survivor_percentage, bar_width, color='y', label='Women')
ax.set_ylabel('Survivor Percentage')
ax.set_title('Percentage Male and Female of survivors based on class')
xTickMarks = male_survivor_percentage.index.values.tolist()
ax.set_xticks(index + bar_width)
xtickNames = ax.set_xticklabels(xTickMarks)
plt.legend()
plt.tight_layout()
plt.show()
              `}
            </SyntaxHighlighter>
            <div className="visualization">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="border p-2 "
                    src="../projects/Titanic/output 2.png"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="border p-2"
                    src="../projects/Titanic/output 3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="observations">
              <h3 className="mt-5">These are our observations:</h3>
              <div className="card p-2">
                <ul className="list-disc mt-3">
                  <li>
                    The majority of survivors are females in all the classes.
                  </li>
                  <li>
                    More than 90% of female passengers in first and second class
                    survived.
                  </li>
                  <li>
                    The percentage of male passengers who survived in first and
                    third class, respectively, are comparable.
                  </li>
                </ul>
              </div>
              <h3 className="mt-5">This is our key takeaway:</h3>
              <div className="card p-3">
                <p>
                  Female passengers were given preference for lifeboats and the
                  majority were saved.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-lg font-semibold underline mt-5">
              What is the distribution of nonsurvivors among the various classes
              who have family aboard the ship?
            </h3>
            <p>
              To answer this question, I will use the following code to plot bar
              charts again using the total number of nonsurvivors in each class
              who each had family aboard, and the percentage with respect to the
              total number of passengers:
            </p>
            <SyntaxHighlighter
              className="mt-4"
              language="python"
              style={vscDarkPlus}
            >
              {`
#Total number of non-survivors in each class
non_survivors = df[(df['SibSp'] > 0) | (df['Parch'] > 0) &  (df['Survived'] == 0)].groupby('Pclass')['Survived'].agg('count')
#Total passengers in each class
total_passengers = df.groupby('Pclass')['PassengerId'].count()
non_survivor_percentage = non_survivors / total_passengers
#Total number of non survivors with family based on class
fig = plt.figure()
ax = fig.add_subplot(111)
rect = ax.bar(non_survivors.index.values.tolist(), non_survivors,  
       color='blue', width=0.5)
ax.set_ylabel('No. of non survivors')
ax.set_title('Total number of non survivors with family based on class')
xTickMarks = non_survivors.index.values.tolist()
ax.set_xticks(non_survivors.index.values.tolist())
xtickNames = ax.set_xticklabels(xTickMarks)
plt.show()

#Plot of percentage of non survivors with family based on class
fig = plt.figure()
ax = fig.add_subplot(111)
rect = ax.bar(non_survivor_percentage.index.values.tolist(), non_survivor_percentage, color='blue', width=0.5)
ax.set_ylabel('Non Survivor Percentage')
ax.set_title('Percentage of non survivors with family based on class')
xTickMarks = non_survivor_percentage.index.values.tolist()
ax.set_xticks(non_survivor_percentage.index.values.tolist())
xtickNames = ax.set_xticklabels(xTickMarks)
plt.show()

              `}
            </SyntaxHighlighter>
            <div className="visualization">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="border border p-2"
                    src="../projects/Titanic/output 6.png"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="border p-2 "
                    src="../projects/Titanic/output 7.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="observations">
              <h3 className="mt-5">These are our observations</h3>
              <div className="card p-2">
                <ul className="list-disc mt-3">
                  <li>There are lot of nonsurvivors in the third class</li>
                  <li>
                    Second class has the least number of nonsurvivors with
                    relatives
                  </li>
                  <li>
                    With respect to the total number of passengers, the first
                    class, who had relatives aboard, has the maximum nonsurvivor
                    percentage and the third class has the least
                  </li>
                </ul>
              </div>
              <h3 className="mt-5">This is our key takeaway:</h3>
              <div className="card p-3">
                <p>
                  Even though third class has the highest number of nonsurvivors
                  with relatives aboard, it primarily had passengers who did not
                  have relatives on the ship, whereas in first class, most of
                  the people had relatives aboard the ship
                </p>
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-lg font-semibold underline mt-5">
              What was the survival percentage among different age groups?
            </h3>
            <p>
              To answer this question, I will use the following code to plot bar
              charts again using the total number of nonsurvivors in each class
              who each had family aboard, and the percentage with respect to the
              total number of passengers:
            </p>
            <SyntaxHighlighter
              className="mt-4"
              language="python"
              style={vscDarkPlus}
            >
              {`
#Defining the age binning interval
age_bin = [0, 18, 25, 40, 60, 100]

#Creating the bins
df['AgeBin'] = pd.cut(df.Age, bins=age_bin)

#Removing the null rows
d_temp = df[np.isfinite(df['Age'])]  # removing all na instances

#Number of survivors based on Age bin
survivors = d_temp.groupby('AgeBin')['Survived'].agg(sum)

#Total passengers in each bin
total_passengers = d_temp.groupby('AgeBin')['Survived'].agg('count')

#Plotting the pie chart of total passengers in each bin
plt.pie(total_passengers, labels=total_passengers.index.values.tolist(), autopct='%1.1f%%', shadow=True, startangle=90)
plt.title('Total Passengers in different age groups')
plt.show()


#Plotting the pie chart of percentage passengers in each bin
plt.pie(survivors, labels=survivors.index.values.tolist(),
     autopct='%1.1f%%', shadow=True, startangle=90)
plt.title('Survivors in different age groups')
plt.show()

              `}
            </SyntaxHighlighter>
            <div className="visualization">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="border border p-2"
                    src="../projects/Titanic/output 4.png"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="border p-2 "
                    src="../projects/Titanic/output 5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="observations">
              <h3 className="mt-5">These are our observations</h3>
              <div className="card p-2">
                <ul className="list-disc mt-3">
                  <li>
                    The 25-40 age group has the maximum number of passengers,
                    and 0-18 has the second highest number of passengers
                  </li>
                  <li>
                    Among the people who survived, the 18-25 age group has the
                    second highest number of survivors
                  </li>
                  <li>
                    The 60-100 age group has a lower proportion among the
                    survivors
                  </li>
                </ul>
              </div>
              <h3 className="mt-5">This is our key takeaway:</h3>
              <div className="card p-3">
                <p>
                  The 25-40 age group had the maximum number of survivors
                  compared to any other age group, and people who were old were
                  either not lucky enough or made way for the younger people to
                  the lifeboats.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
