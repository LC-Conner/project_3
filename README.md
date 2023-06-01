# project_3
Group project 3
By: Emanuel Emahazion
Tisha Conner
Yi Pan
Dane Kutz-Smith

Project ReadMe
The purpose of this project was to get a basket of stocks from a handful of reputable companies and create portfolios with the optimal make up, depending on risk aversion. The portfolio consisted of the following companies: 

JP Morgan
Apple
Amazon
Walmart
Target
Microsoft

What we did is look different a specific time frame and analyzed what would be the optimal weighted portfolio consisting of the equities mentioned above. Assuming our first day of investment was 1/1/2010, and last day of trading was 4/30/2023, the optimal weight of the portfolio is as follows:

JP Morgan 25%
Apple 1.2% 
Amazon 4.5%
Walmart 54.9%
Target 7.7%
Microsoft 6.1%

What we did is analyze the performance of the equities with Python, using the Yahoo Finance API (via the finance python library) and used the Sharpe Markowitz ratio to analyze the stock return over the last decade, which gave us a weighted portfolio.

The equity data we analyzed was migrated into a postgres database titled Project3_db under the table portfolio_3.

From there our python analysis was able to give us a break down of optimized portfolios based on risk aversion. The make up of the portfolio is mentioned above.






First Dashboard
Dashboards were created with Javascript, to visualize the individual returns of each respective stock:

Second Dashboard

A second javascript dashboard was created to show the progress of this optimal portfolio, from its $10,000 inception to its final 10 year date. 
We saw that the portfolio had its peak during the stock boom of 2022, but still did relatively well into 2023.

In conclusion, adjusting for risk and profit, our optimal portfolio falls with this make up:
JP Morgan 25%
Apple 1.2% 
Amazon 4.5%
Walmart 54.9%
Target 7.7%
Microsoft 6.1%
