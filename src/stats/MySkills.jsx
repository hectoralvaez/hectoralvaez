import { ResponsiveRadar } from '@nivo/radar'
import { skillsData } from '../data/skillsData';
skillsData

const MySkills = () => (
    <div className="stats-container">
        <ResponsiveRadar
            data={ skillsData }
            keys={["value"]}
            indexBy="skill"
            valueFormat=" >-.2f"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            borderColor={{ from: "color", modifiers: [] }}
            gridLevels={5}
            gridShape="linear"
            gridLabelOffset={36}
            enableDots={false}
            dotSize={10}
            dotColor={{ theme: "background" }}
            colors={{ scheme: 'set2' }}
            fillOpacity={0.25}
            borderWidth={1}
            motionConfig="wobbly"
            theme={{
                axis: {
                    ticks: {
                        text: {
                            fill: "#888",
                        },
                    },
                },
                grid: {
                    line: {
                        stroke: "#555",
                    },
                },
                tooltip: {
                    container: {
                        color: "#333",
                    },
                },
            }}
            />
    </div>
)

export default MySkills;
