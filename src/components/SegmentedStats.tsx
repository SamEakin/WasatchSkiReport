import { Progress, Box, Text, Group, Paper, SimpleGrid, rem } from '@mantine/core';
import { IconArrowUpRight, IconDeviceAnalytics } from '@tabler/icons-react';
import classes from '../styles/StatsSegments.module.css';
import { useEffect } from 'react';
import moment from 'moment';


const BLUE_PALETTE = [
  '#6439FF',
  '#4F75FF',
  '#00CCDD',
  '#7CF5FF'
]; // https://colorhunt.co/palette/6439ff4f75ff00ccdd7cf5ff

let snowfall_test_data = [
  { date: '2024-08-01', snowfall: 0 },
  { date: '2024-08-02', snowfall: 0 },
  { date: '2024-08-03', snowfall: 0 },
  { date: '2024-08-04', snowfall: 1.2 },
  { date: '2024-08-05', snowfall: 0.7 },
  { date: '2024-08-06', snowfall: 0 },
  { date: '2024-08-07', snowfall: 0 },
  { date: '2024-08-08', snowfall: 0 },
  { date: '2024-08-09', snowfall: 0 },
  { date: '2024-08-10', snowfall: 0 },
  { date: '2024-08-11', snowfall: 0 },
  { date: '2024-08-12', snowfall: 3.4 },
  { date: '2024-08-13', snowfall: 0 },
  { date: '2024-08-14', snowfall: 0 },
  { date: '2024-08-15', snowfall: 0 },
  { date: '2024-08-16', snowfall: 0 },
  { date: '2024-08-17', snowfall: 2.1 },
  { date: '2024-08-18', snowfall: 3.4 },
  { date: '2024-08-19', snowfall: 7.1 },
  { date: '2024-08-20', snowfall: 0 },
  { date: '2024-08-21', snowfall: 0 },
  { date: '2024-08-22', snowfall: 7.1 },
  { date: '2024-08-23', snowfall: 0 },
  { date: '2024-08-24', snowfall: 0 },
  { date: '2024-08-25', snowfall: 0 },
  { date: '2024-08-26', snowfall: 0 },
  { date: '2024-08-27', snowfall: 0 },
  { date: '2024-08-28', snowfall: 2.0 },
  { date: '2024-08-29', snowfall: 0 },
  { date: '2024-08-30', snowfall: 0 },
  { date: '2024-08-31', snowfall: 0 },
  { date: '2024-09-01', snowfall: 0 },
  { date: '2024-09-02', snowfall: 0 },
  { date: '2024-09-03', snowfall: 0.5 },
  { date: '2024-09-04', snowfall: 0.1 },
  { date: '2024-09-05', snowfall: 1.2 },
  { date: '2024-09-06', snowfall: 0 },
  { date: '2024-09-07', snowfall: 0 },
  { date: '2024-09-08', snowfall: 0 },
  { date: '2024-09-09', snowfall: 0 },
  { date: '2024-09-10', snowfall: 0 },
  { date: '2024-09-11', snowfall: 0 },
  { date: '2024-09-12', snowfall: 3.6 },
  { date: '2024-09-13', snowfall: 0 },
  { date: '2024-09-14', snowfall: 0 },
  { date: '2024-09-15', snowfall: 6 },
  { date: '2024-09-16', snowfall: 0 },
  { date: '2024-09-17', snowfall: 0 },
  { date: '2024-09-18', snowfall: 0 },
  { date: '2024-09-19', snowfall: 0 },
  { date: '2024-09-20', snowfall: 8.0 },
  { date: '2024-09-21', snowfall: 0 },
  { date: '2024-09-22', snowfall: 0 },
  { date: '2024-09-23', snowfall: 0 },
  { date: '2024-09-24', snowfall: 0 },
  { date: '2024-09-25', snowfall: 1.0 },
  { date: '2024-09-26', snowfall: 0 },
  { date: '2024-09-27', snowfall: 0 },
  { date: '2024-09-28', snowfall: 0 },
  { date: '2024-09-29', snowfall: 0 },
  { date: '2024-09-30', snowfall: 0 },
  { date: '2024-10-01', snowfall: 2.3 },
  { date: '2024-10-02', snowfall: 0.0 },
  { date: '2024-10-03', snowfall: 1.2 },
  { date: '2024-10-04', snowfall: 0.5 },
  { date: '2024-10-05', snowfall: 3.1 },
  { date: '2024-10-06', snowfall: 0.0 },
  { date: '2024-10-07', snowfall: 4.7 },
  { date: '2024-10-08', snowfall: 0.0 },
  { date: '2024-10-09', snowfall: 2.8 },
  { date: '2024-10-10', snowfall: 0.0 },
  { date: '2024-10-11', snowfall: 1.5 },
  { date: '2024-10-12', snowfall: 0.0 },
  { date: '2024-10-13', snowfall: 3.6 },
  { date: '2024-10-14', snowfall: 0.0 },
  { date: '2024-10-15', snowfall: 4.2 },
  { date: '2024-10-16', snowfall: 0.0 },
  { date: '2024-10-17', snowfall: 2.9 },
  { date: '2024-10-18', snowfall: 0.0 },
  { date: '2024-10-19', snowfall: 1.8 },
  { date: '2024-10-20', snowfall: 0.0 },
  { date: '2024-10-21', snowfall: 3.4 },
  { date: '2024-10-22', snowfall: 0.0 },
  { date: '2024-10-23', snowfall: 2.1 },
  { date: '2024-10-24', snowfall: 0.0 },
  { date: '2024-10-25', snowfall: 4.0 },
  { date: '2024-10-26', snowfall: 0.0 },
  { date: '2024-10-27', snowfall: 3.7 },
  { date: '2024-10-28', snowfall: 0.0 },
  { date: '2024-10-29', snowfall: 2.5 },
  { date: '2024-10-30', snowfall: 0.0 },
  { date: '2024-10-31', snowfall: 1.9 },
];

let this_week_total = 0;
let this_month_total = 0;
let previous_months_total = 0;
let forecast_total = 0;

function handleSnowfallTotals() {
  snowfall_test_data.forEach((record)=> {
    let date = moment(record.date);
    let snowfall = record.snowfall;
    if (date.isBetween(moment().subtract(7, 'days'), moment())) {
      // 1. sum of all records within last 0-7 days (weekly total)
      console.log(`Record date: ${date.format('YYYY-MM-DD')} is within the last week. this_week_total = ${this_week_total} (+${snowfall} )`)
      this_week_total += snowfall
    } else if (date.isBetween(moment().startOf('month').subtract(1, 'days'), moment())) {
      // 2. sum of all records within last 7-31 days (monthly total)
      console.log(`Record date: ${date.format('YYYY-MM-DD')} is within the last month. this_month_total = ${this_month_total} (+${snowfall} )`)
      this_month_total += snowfall
    } else if (date.isBefore(moment().startOf('month'))) {
      // 3. sum of all records +31 days ago
      console.log(`Record date: ${date.format('YYYY-MM-DD')} is from a previous month. this_month_total = ${previous_months_total} (+${snowfall} )`)
      previous_months_total += snowfall
    } else if (date.isAfter(moment())){
      console.log(`Record date: ${date.format('YYYY-MM-DD')} is forecasted for this coming week. forecast_total = ${forecast_total} (+${snowfall})`)
    } else {
      console.log(`Record date: ${date.format('YYYY-MM-DD')} HAS AN ISSUE. FELL THROUGH ALL SCENARIOS.`)
    }
  });
}

handleSnowfallTotals()

let sum_total = this_week_total + this_month_total + previous_months_total + forecast_total

const data = [
  { label: 'Previous', count: previous_months_total.toFixed(1), part: sum_total, color: BLUE_PALETTE[0]},
  { label: 'This Month', count: this_month_total.toFixed(1), part: parseInt((this_month_total / sum_total * 100).toFixed(1)) , color: BLUE_PALETTE[1]},
  { label: 'This Week', count: this_week_total.toFixed(1), part: parseInt((this_week_total / sum_total * 100).toFixed(1)), color: BLUE_PALETTE[2]},
];

export default function StatsSegments(weather: any) {

  const segments = data.map((segment) => (
    <Progress.Section value={segment.part} color={segment.color} key={segment.color}>
      {/* {segment.part > 10 && <Progress.Label>{segment.count}</Progress.Label>} */}
      {<Progress.Label>{segment.count}</Progress.Label>}
    </Progress.Section>
  ));

  const descriptions = data.map((stat) => (
    <Box key={stat.label} style={{ borderBottomColor: stat.color }} className={classes.stat}>
      <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
        {stat.label}
      </Text>

      <Group justify="space-between" align="flex-end" gap={0}>
        <Text fw={700}>{stat.count}</Text>
        <Text c={stat.color} fw={700} size="sm" className={classes.statCount}>
          {stat.part}%
        </Text>
      </Group>
    </Box>
  ));

  return (
    <Paper withBorder p="md" radius="md">
      <Group justify="space-between">
        <Group align="flex-end" gap="xs">
          <Text fz="xl" fw={700}>
            {sum_total.toFixed(1)}"
          </Text>
          <Text c="teal" className={classes.diff} fz="sm" fw={700}>
            <span>18%</span>
            <IconArrowUpRight size="1rem" style={{ marginBottom: rem(4) }} stroke={1.5} />
          </Text>
        </Group>
      </Group>

      <Text c="dimmed" fz="sm">
        Snowfall totals compared to previous month
      </Text>

      <Progress.Root size={34} classNames={{ label: classes.progressLabel }} mt={40}>
        {segments}
      </Progress.Root>
      <SimpleGrid cols={{ base: 1, xs: 3 }} mt="xl">
        {descriptions}
      </SimpleGrid>
    </Paper>
  );
}