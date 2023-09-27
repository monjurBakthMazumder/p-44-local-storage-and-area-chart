import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {GetData} from '../../Utility/localStorage'
const storeData = GetData()
const data = [
  {
    name: 'BD',
    win: storeData?.BGDw,
    lost: storeData?.BGDl,
    dro: storeData?.BGDd,
  },
  {
    name: 'PAK',
    win: storeData?.PAKw,
    lost: storeData?.PAKl,
    dro: storeData?.PAKd,
  },
  {
    name: 'IND',
    win: storeData?.INDw,
    lost: storeData?.INDl,
    dro: storeData?.INDd,
  },
  {
    name: 'SL',
    win: storeData?.SLw,
    lost: storeData?.SLl,
    dro: storeData?.SLd,
  },
  {
    name: 'AFG',
    win: storeData?.AFGw,
    lost: storeData?.AFGl,
    dro: storeData?.AFGd,
  },
  {
    name: 'SA',
    win: storeData?.SAw,
    lost: storeData?.SAl,
    dro: storeData?.SAd,
  },
  {
    name: 'ENGw',
    win: storeData?.ENGw,
    lost: storeData?.ENGl,
    dro: storeData?.ENGd,
  },
  {
    name: 'AUS',
    win: storeData?.AUSw,
    lost: storeData?.AUSl,
    dro: storeData?.AUSd,
  },
  {
    name: 'NLD',
    win: storeData?.NLDw,
    lost: storeData?.NLDl,
    dro: storeData?.NLDd,
  },
  {
    name: 'NZL',
    win: storeData?.NZLw,
    lost: storeData?.NZLl,
    dro: storeData?.NZLd,
  },
];
const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};
const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.uv));
  const dataMin = Math.min(...data.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};
const off = gradientOffset();
const Statistics = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="win" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="win" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="lost" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="dro" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={renderTooltipContent} />
          <Area type="monotone" dataKey="win" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="lost" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="dro" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
      <div>
      <h4>Wins AreaCharts</h4>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="win" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div>
      <p>Lost AreaCharts</p>

<ResponsiveContainer width="100%" height={200}>
  <AreaChart
    width={500}
    height={200}
    data={data}
    syncId="anyId"
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area type="monotone" dataKey="lost" stroke="#82ca9d" fill="#82ca9d" />
  </AreaChart>
</ResponsiveContainer>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="win" stroke="#000" fill="url(#splitColor)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;