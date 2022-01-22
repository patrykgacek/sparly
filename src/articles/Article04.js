import Layout from "../components/Layout";

const Article04 = () => {
    return (
        <Layout>
            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md`}> 10 Best Ways to Save Money </div>
            <div className="container">
                <div class="flex flex-wrap justify-center">
                    <img
                        src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        class="p-1 bg-white border rounded max-w-sm"
                        alt="..."
                    />
                </div>
                <br></br>
                <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800 m-32 text-justify">
                If you’re concerned about your money then here are five tips, according to recent reports, to protect your money during this rising inflation.
                </p>
                <p class="text-base font-bold leading-relaxed mt-0 mb-4 text-black-800 m-32 text-justify">
                1. Invest in stocks
                </p>
                <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800 m-32 text-justify">
                The stock market tends to beat inflation with its rate of return, according to CNBC, though growth may be slower during these times.
                Financial adviser Mitchell Goldberg suggests considering cyclical companies, which follow the cycles of an economy, per CNBC. For example, industries like energy and the consumer discretionary sector will often follow the movement of the economy. So if there’s a rise in inflation, the stocks will also rise in value.
                </p>
                <p class="text-base font-bold leading-relaxed mt-0 mb-4 text-black-800 m-32 text-justify">
                2. Buy, don’t rent
                </p>
                <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800 m-32 text-justify">
                During an inflationary period, the market usually favors the buyers over renters, according to Forbes. Landlords usually hike up the rent next to the level of inflation. But if you’re a homeowner, your payments are fixed and the value of your home is likely to rise over time.
                </p>
                <p class="text-base font-bold leading-relaxed mt-0 mb-4 text-black-800 m-32 text-justify">
                3. Finance your home
                </p>
                <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800 m-32 text-justify">
                It’s an ideal time to be a borrower as interest rates are low right now, according to Forbes. If your mortgage is long-term, then you can stay protected against rising prices.
                Per the report, borrowing for 30 years can easily get you an interest rate of less than 3%.
                </p>
                <p class="text-base font-bold leading-relaxed mt-0 mb-4 text-black-800 m-32 text-justify">
                4. Budget, budget and budget
                </p>
                <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800 m-32 text-justify">
                Watching what you spend and living in your means will help you stay on track. Keep track of your cash flow by monitoring your income, expenses and savings.
                Per The Balance, this can help you spend the same regardless of the increasing cost of commodities, like gas.
                </p>
                <p class="text-base font-bold leading-relaxed mt-0 mb-4 text-black-800 m-32 text-justify">
                5. Think before you buy
                </p>
                <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800 m-32 text-justify">
                Buy products that are durable and cost-efficient, from clothes to washers and dryers, including cars, per Forbes. If your car uses a lot of gas, then buying a fuel-efficient car, or an electric car can save a lot of money in the long run.
                </p>
                <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800 m-32 text-justify">
                <i>This text is adapted from: <a href="url">https://www.deseret.com/2021/11/20/22792145/how-to-save-money-inflation</a> </i>
                </p>
            </div>

        </Layout>
    )
}

export default Article04;