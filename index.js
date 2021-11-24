/**
 * @module linear-regression
 * Represents the linear model class.
 * @author Nikolas B Virionis <nikolas.virionis@bandtec.com.br>
 */
class LinearModel {
    /**
     * @constructor
     * @param {number[]} data
     * The dataset to be modeled,
     *  on it's behavior over time.
     *
     */
    constructor(data) {
        if (!data) {
            throw "It is necessary to provide the dataset";
        }
        if (data.length < 2) {
            throw "In order to design a linear model, you must provide at least 2 data points";
        }
        try {
            this.data = data.map(el => Number(el));
        } catch (e) {
            throw `Some value in the dataset is invalid, or impossible to convert to number, \nError: ${e}`;
        }
    }

    /**
     *
     * @param {number} rad angle measured in radians
     * @returns {number}
     * returns the angle measured in degrees
     *  to better visualize the behaviour of the model
     */
    static radsToDegs = rad => (rad * 180) / Math.PI;

    /**
     *
     * @method
     * @returns {number} length of the dataset
     */
    getDatasetLength() {
        return this.data.length;
    }

    /**
     * @method
     * In order to better describe the dataset's
     * behaviour over time, we need to provide the
     * x axis values to complete the data frame.
     */
    getXAxisValues() {
        let x = [...Array(this.getDatasetLength()).keys()];
        x.push(x[x.length - 1] + 1);
        x.shift();
        return [...x];
    }

    /**
     * @method
     * @returns {number} sum of all dataset values
     */
    getSumOfDatasetValues() {
        let sumDataset = 0;
        for (const iterator of this.data) {
            sumDataset += iterator;
        }
        return sumDataset;
    }
    /**
     * @method
     * @returns {number} sum of all x axis values
     */
    getSumOfXValues() {
        let sumX = 0;
        for (const iterator of this.getXAxisValues()) {
            sumX += iterator;
        }
        return sumX;
    }

    /**
     * @method
     * @returns {number} returns the slope of the "chart"
     * which consists of the tangent of the angle
     * which has the formula:
     * - let the sum of equivalent elements times the dataset length as a
     * - let the multiplication of the sum of all the values in both the datasets as b
     * - let the sum of all squared x values times the dataset length as c
     * - let the squared sum of all x values as d
     * @returns     slope = (a - b) / (c - d)
     */
    getSlope() {
        // slope => tan(x)
        let slope =
            (this.#getSumOfEquivalentElementsTimesLength() -
                this.#getMultiplicationOfAxisValuesSum()) /
            (this.#getXValuesSquaredSummedTimesLength() -
                this.#getSumOfXValuesSquaredTimesLength());
        return slope;
    }

    /**
     * @method
     * @returns {number} returns the sum of equivalent
     * elements times the dataset length
     */
    #getSumOfEquivalentElementsTimesLength() {
        let sum = 0;
        for (let i in this.getXAxisValues()) {
            sum += this.getXAxisValues()[i] * this.data[i];
        }
        return this.getDatasetLength() * sum;
    }

    /**
     * @method
     * @returns {number} returns the multiplication of the sum of
     * all the values in both the datasets
     */
    #getMultiplicationOfAxisValuesSum() {
        return this.getSumOfDatasetValues() * this.getSumOfXValues();
    }

    /**
     * @method
     * @returns {number} returns the sum of all squared x values
     * times the dataset length
     */
    #getXValuesSquaredSummedTimesLength() {
        let xValuesSquared = this.getXAxisValues().map(el => el ** 2);
        let sumOfXValuesSquared = [...xValuesSquared].reduce(
            (ac, el) => (ac += el)
        );
        return this.getDatasetLength() * sumOfXValuesSquared;
    }

    /**
     * @method
     * @returns {number} returns the squared sum of all x values
     */
    #getSumOfXValuesSquaredTimesLength() {
        return this.getSumOfXValues() ** 2;
    }

    /**
     * @method
     * @returns {number} returns the angle in radians
     * which consists of the arc tangent of the slope
     * which corresponds of the tangent of the angle
     * this way arctan(x)/tan(x) = x rad
     */
    getAngleInRadians() {
        return Math.atan(this.getSlope());
    }

    /**
     * @method
     * @returns {number} returns the angle in degrees
     * which consists of the conversion of the angle in
     * radians to degrees
     */
    getAngleInDegrees() {
        return LinearModel.radsToDegs(this.getAngleInRadians());
    }

    /**
     * @method
     * @returns {string} returns the overall behaviour
     * of the dataset, being the options:
     *  - constant for a dataset that is nearly not changing significantly
     *  - increase for a dataset with an increasing pattern
     *  - reduction for a dataset with an decreasing pattern
     */
    getDatasetBehavior() {
        let deg = this.getAngleInDegrees();
        if (deg >= -1 && deg <= 1) {
            return "constant";
        }
        if (deg > 1) {
            return "increase";
        }
        return "reduction";
    }

    /**
     * @method
     * @returns {string} returns the overall behavioural instensity
     * of the dataset, being the options:
     *  - steady for a dataset that is nearly not changing significantly(constant)
     *  - mild for a dataset with up to 10° of inclination
     *  - moderate for a dataset with up to 25° of inclination
     *  - significant for a dataset with up to 40° of inclination
     *  - drastic for a dataset with more than 40° of inclination
     */
    getDatasetBehavioralIntensity() {
        let deg = Math.abs(this.getAngleInDegrees());
        if (deg <= 1) {
            return "steady";
        }
        if (deg < 10) {
            return "mild";
        }
        if (deg < 25) {
            return "moderate";
        }
        if (deg < 40) {
            return "significant";
        }
        return "drastic";
    }

    /**
     * @method
     * @returns {number} returns the multiplication of the
     * slope and the sum of all x axis values
     */
    #getSlopeTimesSumOfXValues() {
        return this.getSlope() * this.getSumOfXValues();
    }

    /**
     * @method
     * @returns {number} returns the linear coefficient
     * which is represented as the division between
     * the subtraction between the sum of the dataset values
     * and the slope times the sum of x axis values
     * and the length of the dataset, being the formula:
     * - let the sum of the dataset values as a
     * - let the slope times the sum of the x axis values as b
     * - let the length of the dataset as n
     * @returns  linearCoefficient = (a - b) / n
     */
    getLinearCoefficient() {
        return (
            (this.getSumOfDatasetValues() - this.#getSlopeTimesSumOfXValues()) /
            this.getDatasetLength()
        );
    }

    /**
     * @method
     * @returns {object} returns the angular coefficient(slope) and
     * linear coefficient(y-intercept)
     */
    getCoefficients() {
        return {
            angular: this.getSlope(),
            linear: this.getLinearCoefficient()
        };
    }

    /**
     * @method
     * @returns {object} returns equation as a string to be better displayed
     * and visualized and the function itself to be used and make predictions
     * ofthe dataset most probable behaviour overtime
     *
     */
    getLinearEquation() {
        return {
            stringEquation: `f(x) = ${this.getSlope().toFixed(
                3
            )}x + ${this.getLinearCoefficient().toFixed(3)}`,
            function: x => x * this.getSlope() + this.getLinearCoefficient()
        };
    }
}

module.exports = LinearModel;
