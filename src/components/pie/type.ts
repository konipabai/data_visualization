export interface legendType {
    show: boolean;
    icon: string;
    left: string;
    top: string;
    itemStyle?: {
        color: string;
    };
    formatter: string;
    textStyle: {
        rich: {
            legendTextStyle: {
                fontSize: number; color: string
            };
            legendNumberStyle: {
                fontSize: number; color: string
            };
        };
    };
    data: string[];
}

export interface pieType {
    itemStyle: { 
        borderRadius?: number;
        color?: string; 
        opacity?: number;
        borderColor: string;
        borderWidth: number
    };
    value: number;
    name: string;
}

export interface chartType {
    value: number;
    name: string;
}