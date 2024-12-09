import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import axios from "axios";
import './Comparison.css'; // Import the CSS file

const Comparison = () => {
    const [carbonData, setCarbonData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from the API
    const fetchCarbonData = async () => {
        try {
            const response = await axios.get("http://localhost:3002/allHolding"); // Adjust this URL if needed
            setCarbonData(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching carbon data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCarbonData();
    }, []);

    if (loading) return <p>Loading...</p>;

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF3D00'];

    // Prepare data for combined charts (comparing all records)
    const combinedDataForPie = carbonData.map((record, index) => ({
        name: `Record ${index + 1}`,
        value: record.TotalCarbon
    }));

    const combinedDataForBar = carbonData.map((record, index) => ({
        name: `Record ${index + 1}`,
        value: record.TotalCarbon
    }));

    return (
        <div style={{ padding: '20px' }}>
            <h2 className="comparision-heading">Total Carbon Footprint Comparison</h2>

            {/* Render individual charts for each record in a grid layout */}
            <div className="comparison-container12">
                {carbonData.map((record, index) => {
                    const dataForPie = [{ name: 'Carbon Footprint', value: record.TotalCarbon }];
                    const dataForBar = [{ name: 'Record', value: record.TotalCarbon }];

                    return (
                        <div key={record._id} className="chart-container12">
                            <h3>Record {index + 1}</h3>
                            <div className="pie-chart12">
                                <PieChart width={200} height={200}>
                                    <Pie
                                        data={dataForPie}
                                        cx={100}
                                        cy={100}
                                        innerRadius={40}
                                        outerRadius={60}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {dataForPie.map((entry, i) => (
                                            <Cell key={`cell-${i}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </div>
                            <div className="bar-chart12">
                                <BarChart width={200} height={150} data={dataForBar}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <Tooltip />
                                    <Bar dataKey="value" fill={COLORS[index % COLORS.length]} />
                                </BarChart>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Combined Comparison Charts */}
            <div className="combined-comparison12">
                <h3>Combined Carbon Footprint Comparison</h3>

                <div className="combined-charts12">
                    <div className="pie-chart12">
                        <PieChart width={200} height={200}>
                            <Pie
                                data={combinedDataForPie}
                                cx={100}
                                cy={100}
                                innerRadius={40}
                                outerRadius={60}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {combinedDataForPie.map((entry, i) => (
                                    <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>

                    <div className="bar-chart12">
                        <BarChart width={200} height={150} data={combinedDataForBar}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <Tooltip />
                            <Bar dataKey="value" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comparison;
