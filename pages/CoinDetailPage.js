import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "../pages-sections/Detailpage-Sections/HistoryChart";
import CoinData from "../pages-sections/Detailpage-Sections/CoinData";
import coinGecko from "../apis/coinGecko";
import CoinDescription from '../pages-sections/Detailpage-Sections/CoinDescription'

const CoinDetailPage = () => {
    const { id } = useParams();
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const formatData = (data) => {
        return data.map((el) => {
        return {
            t: el[0],
            y: el[1].toFixed(2),
        };
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const [day, week, year, detail, description] = await Promise.all([
            coinGecko.get(`/coins/${id}/market_chart/`, {
                params: {
                    vs_currency: "usd",
                    days: "1",
                },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                params: {
                    vs_currency: "usd",
                    days: "7",
                },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                params: {
                    vs_currency: "usd",
                    days: "365",
                },
                }),
                coinGecko.get("/coins/markets/", {
                params: {
                    vs_currency: "usd",
                    ids: id,
                },
                }),
                coinGecko.get(`/coins/${id}/`, {
                params:{
                    id: id,
                    
                }
            })
        ]);

        setCoinData({
            day: formatData(day.data.prices),
            week: formatData(week.data.prices),
            year: formatData(year.data.prices),
            detail: detail.data[0],
            description: description.data
        });
        setIsLoading(false);
        };

        fetchData();
    }, []);

    const renderData = () => {
        if (isLoading) {
        return <div class="d-flex justify-content-center sppiner">
                    <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                </div>;
        }
        return (
        <div className="coinlist">
            <HistoryChart data={coinData} />
            <CoinData data={coinData.detail} />
            <CoinDescription data={coinData.description} />
        </div>
        );
    };

    return renderData();
};

export default CoinDetailPage;
