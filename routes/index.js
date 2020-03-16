const router = require('express').Router();

const students = [
    {
        name: "Patapaa Asante",
        DOB: "18/08/2004",
        program: "BSC Music",
        level: "200",
        image:"/images/Patapaa.jpg"
    },
    {
        name: "Ray Hushpuppi",
        DOB: "23/04/1998",
        program: "BSC Fraudology",
        level: "100",
        image:"/images/Hushpuppi.jpg"
    },
    {
        name: "Adwoa Smart",
        DOB: "06/03/1957",
        program: "BSC Finance",
        level: "300",
        image :"/images/rhianna.jpg"
    },
    {
        name: "Ibrah One",
        DOB: "12/20/2000",
        program: "BSC Business Admin",
        level: "300",
        image:"/images/Ibrah1.jpg"
    },
    {
        name: "Nana Ama McBrown",
        DOB: "12/20/2000",
        program: "BSC Theatre Arts",
        level: "100",
        image:"/images/NanaAma.jpg"
    }
]


router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('student', {
        title: students[id].name,
        student
    })
});

module.exports = router;