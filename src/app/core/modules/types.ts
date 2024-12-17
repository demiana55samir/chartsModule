import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexFill,
  ApexYAxis
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  plotOptions:ApexPlotOptions;
  labels?: string[];
  fill:ApexFill;
  stroke:ApexStroke | undefined;
};



export type RadialOptions = {
  series: number[];
  chart: ApexChart;
  labels: string[];
  colors: string[];
  title?: {
    text: string;
  };
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: string;
        };
        value: {
          fontSize: string;
        };
        total: {
          show: boolean;
          label: string;
          formatter: () => string;
        };
      };
    };
  };
};

export type DonutOptions = {
  series: number[];
  chart: ApexChart;
  labels: string[];
  fill:ApexFill;
  title: {
    text: string;
  };
  yaxis: ApexYAxis;
  plotOptions: {
    pie: {
      donut: {
        size: string;
        labels: {
          show: boolean;
          total: {
            show: boolean;
            label: string;
            formatter: () => string;
          };
        };
      };
    };
  };
  dataLabels: {
    enabled: boolean;
    style?: {
      colors: string[];
      fontSize: string;
      fontWeight: string;
    };
  };
};
