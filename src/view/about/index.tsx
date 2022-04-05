import { Card } from 'antd'
import styled from "styled-components";

const About = () => {
    return (
        <Box>
            <div className="about">
                <Card className="card">
                    <Card type="inner" title="联系方式">
                        邮箱：mliu66789@gmail.com
                    </Card>
                    <Card
                        style={{ marginTop: 16 }}
                        type="inner"
                        title="座右铭"
                    >
                        人间正道是沧桑
                    </Card>
                </Card>
            </div>
        </Box>
    );
};

const Box = styled.div`
height: 100%;
.about {
    height: 100%;
    .card {
        height: 95%;
    }
}
`;

export default About;
