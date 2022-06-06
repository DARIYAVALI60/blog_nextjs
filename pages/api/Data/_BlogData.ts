// export const BlogData = [
//   {
//     id: 1,
//     title: "Cause Of Environment",
//     content:
//       "Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere. Pollution is the introduction of contaminants into the natural environment that cause adverse change.[1] Pollution can take the form of any substance (solid, liquid, or gas) or energy (such as radioactivity, heat, sound, or light). Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants. Although environmental pollution can be caused by natural events, the word pollution generally implies that the contaminants have an anthropogenic source – that is, a source created by human activities. Pollution is often classed as point source or nonpoint source pollution. In 2015, pollution killed nine million people worldwide.[2][3] Major forms of pollution include air pollution, light pollution, litter, noise pollution, plastic pollution, soil contamination, radioactive contamination, thermal pollution, visual pollution, and water pollution.",
//     avatar:
//       "https://lh3.googleusercontent.com/a-/AOh14Gi-niaolq7-Wpc97EAD77WzhMpgcyHqeUD1q4Xdig=s360-p-rw-no",
//     author: "Sakkurthi Sashank",
//     date: "Feb 08, 2021",
//     follow: false,
//   },
// ];

import axios from "axios"

export const BlogData = () =>{

  const res = axios.get('/api/blog/post')
  res.then(res => {
    
  }
  )
}
