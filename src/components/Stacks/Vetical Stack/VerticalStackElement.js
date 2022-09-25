import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
function VerticalStackElement({title}) {
    const styles = {
        container:{
            height:'50px'
        },
        contentStyle: {
          background:"#FFFFFF",
          borderRadius:'50px',
          textAlign:'center',
          boxShadow: '-2px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 4px rgba(0, 0, 0, 0.1)'
        },
        iconStyle: {
          background: "#F050BE",
        },
      };
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work col-12"
      contentStyle={styles.contentStyle}
      iconStyle={styles.iconStyle}
      style={styles.container}
    >
        {title}
    </VerticalTimelineElement>
  );
}

export default VerticalStackElement;
