const blogContents = [
    {
        id: 1,
        title: "Understanding JavaScript Closures",
        cover: "https://unsplash.com/photos/black-flat-screen-computer-monitor-oXlXu2qukGE",
        author: "Jane Doe",
        authorImage: "/newlogo_crop.png",
        authorBio: "Jane is a software engineer with a passion for writing and teaching. She has experience in web development and loves to share her knowledge with others.",
        date: "2023-10-01",
        description: "In this blog post, we will explore JavaScript closures, how they work, and why they are useful...",
        content: `In this blog post, we will explore JavaScript closures, how they work, and why they are useful. Closures are an important concept in JavaScript that allows functions to access variables from an outer function scope. This can be useful for creating private variables, implementing data hiding, and more. Let's dive in and learn more about closures in JavaScript and how you can use them in your code to write more efficient and maintainable programs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tortor vel urna consequat aliquam sit amet molestie ligula. Suspendisse feugiat tortor ac tempor vulputate. Phasellus dui sapien, laoreet eget viverra eu, consectetur id justo. Fusce ligula dolor, tristique id eleifend vel, maximus at quam. Quisque pulvinar fermentum odio. Maecenas quam metus, bibendum quis faucibus in, faucibus a ipsum. Nullam erat nisi, sagittis sed lobortis eu, ultricies id nisl. In pretium metus in turpis tristique, ac lacinia ante interdum. Ut feugiat laoreet ex at venenatis. Donec venenatis vestibulum magna, ac imperdiet nisi.\n
        
        Praesent lobortis lacus vel varius varius. Praesent orci ex, scelerisque in lacus et, semper vehicula mauris. Donec mattis orci eu arcu dapibus dignissim. Nullam placerat dapibus dolor sit amet cursus. In consectetur velit vitae dui interdum, non posuere sem hendrerit. Praesent fermentum, sem eget cursus ullamcorper, magna tellus malesuada urna, vitae sodales dolor urna at turpis.Aliquam nec volutpat erat, eu pellentesque tortor. Integer accumsan varius sapien ac sagittis. In sed egestas risus, molestie venenatis nisl. Suspendisse tristique a purus nec dictum. Vestibulum accumsan cursus efficitur. Aliquam ac condimentum nibh, id ultrices diam. Nullam tempus lectus ut velit tempus, sed fermentum nisi suscipit. Phasellus auctor luctus felis. \n
        
        Praesent lobortis lacus vel varius varius. Praesent orci ex, scelerisque in lacus et, semper vehicula mauris. Donec mattis orci eu arcu dapibus dignissim. Nullam placerat dapibus dolor sit amet cursus. In consectetur velit vitae dui interdum, non posuere sem hendrerit. Praesent fermentum, sem eget cursus ullamcorper, magna tellus malesuada urna, vitae sodales dolor urna at turpis.Aliquam nec volutpat erat, eu pellentesque tortor. Integer accumsan varius sapien ac sagittis. In sed egestas risus, molestie venenatis nisl. Suspendisse tristique a purus nec dictum. Vestibulum accumsan cursus efficitur. Aliquam ac condimentum nibh, id ultrices diam. Nullam tempus lectus ut velit tempus, sed fermentum nisi suscipit. Phasellus auctor luctus felis
        Praesent lobortis lacus vel varius varius. Praesent orci ex, scelerisque in lacus et, semper vehicula mauris. Donec mattis orci eu arcu dapibus dignissim. Nullam placerat dapibus dolor sit amet cursus. In consectetur velit vitae dui interdum, non posuere sem hendrerit. Praesent fermentum, sem eget cursus ullamcorper, magna tellus malesuada urna, vitae sodales dolor urna at turpis.Aliquam nec volutpat erat, eu pellentesque tortor. Integer accumsan varius sapien ac sagittis. In sed egestas risus, molestie venenatis nisl. Suspendisse tristique a purus nec dictum. Vestibulum accumsan cursus efficitur. Aliquam ac condimentum nibh, id ultrices diam. Nullam tempus lectus ut velit tempus, sed fermentum nisi suscipit. Phasellus auctor luctus felis`,
        tags: ["JavaScript", "Closures", "Programming"],
        socials: [
            {
                link:"abc",
                icon:"/icons/linkedin.svg"
            }, 
            {
                link:"def",
                icon:"/icons/instagram.svg"
            },
        ]
    },
    {
        id: 2,
        title: "A Guide to React Hooks",
        cover: "https://unsplash.com/photos/black-flat-screen-computer-monitor-oXlXu2qukGE",
        author: "John Smith",
        authorImage: "/newlogo_crop.png",
        authorBio: "Jane is a software engineer with a passion for writing and teaching. She has experience in web development and loves to share her knowledge with others.",
        date: "2023-09-15",
        description: "In this blog post, we will explore how to use React Hooks, why they are useful, and how they can help you write cleaner and more maintainable code...",
        content: "React Hooks are functions that let you use state and other React features without writing a class component. They are introduced in React 16.8 to allow developers to use state and other React features in functional components. In this blog post, we will explore how to use React Hooks, why they are useful, and how they can help you write cleaner and more maintainable code. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tortor vel urna consequat aliquam sit amet molestie ligula. Suspendisse feugiat tortor ac tempor vulputate. Phasellus dui sapien, laoreet eget viverra eu, consectetur id justo. Fusce ligula dolor, tristique id eleifend vel, maximus at quam. Quisque pulvinar fermentum odio. Maecenas quam metus, bibendum quis faucibus in, faucibus a ipsum. \nNullam erat nisi, sagittis sed lobortis eu, ultricies id nisl. In pretium metus in turpis tristique, ac lacinia ante interdum. Ut feugiat laoreet ex at venenatis. Donec venenatis vestibulum magna, ac imperdiet nisi. Praesent lobortis lacus vel varius varius. Praesent orci ex, scelerisque in lacus et, semper vehicula mauris. Donec mattis orci eu arcu dapibus dignissim. Nullam placerat dapibus dolor sit amet cursus. In consectetur velit vitae dui interdum, non posuere sem hendrerit. Praesent fermentum, sem eget cursus ullamcorper, magna tellus malesuada urna, vitae sodales dolor urna at turpis. Aliquam nec volutpat erat, eu pellentesque tortor. Integer accumsan varius sapien ac sagittis. In sed egestas risus, molestie venenatis nisl. Suspendisse tristique a purus nec dictum. Vestibulum accumsan cursus efficitur. Aliquam ac condimentum nibh, id ultrices diam. Nullam tempus lectus ut velit tempus, sed fermentum nisi suscipit. Phasellus auctor luctus felis.",
        tags: ["React", "Hooks", "Frontend"],
        socials: [
            {
                link:"abc",
                icon:"/icons/linkedin.svg"
            }, 
            {
                link:"def",
                icon:"/icons/instagram.svg"
            },
        ]
    },
    {
        id: 3,
        title: "CSS Grid Layout: A Comprehensive Guide",
        cover: "https://unsplash.com/photos/black-flat-screen-computer-monitor-oXlXu2qukGE",
        author: "Alice Johnson",
        authorImage: "/newlogo_crop.png",
        authorBio: "Jane is a software engineer with a passion for writing and teaching. She has experience in web development and loves to share her knowledge with others.",
        date: "2023-08-20",
        description: "In this blog post, we will explore CSS Grid Layout, how it works, and how you can use it to create responsive and flexible layouts for your web projects...",
        content: "CSS Grid Layout is a powerful layout system available in CSS. It allows you to create complex layouts with rows and columns, without having to rely on floats or positioning. In this blog post, we will explore the basics of CSS Grid Layout, how it works, and how you can use it to create responsive and flexible layouts for your web projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tortor vel urna consequat aliquam sit amet molestie ligula. Suspendisse feugiat tortor ac tempor vulputate. Phasellus dui sapien, laoreet eget viverra eu, consectetur id justo. Fusce ligula dolor, tristique id eleifend vel, maximus at quam. Quisque pulvinar fermentum odio. Maecenas quam metus, bibendum quis faucibus in, faucibus a ipsum. Nullam erat nisi, sagittis sed lobortis eu, ultricies id nisl. In pretium metus in turpis tristique, ac lacinia ante interdum. Ut feugiat laoreet ex at venenatis.\n Donec venenatis vestibulum magna, ac imperdiet nisi. Praesent lobortis lacus vel varius varius. Praesent orci ex, scelerisque in lacus et, semper vehicula mauris. Donec mattis orci eu arcu dapibus dignissim. Nullam placerat dapibus dolor sit amet cursus. In consectetur velit vitae dui interdum, non posuere sem hendrerit. Praesent fermentum, sem eget cursus ullamcorper, magna tellus malesuada urna, vitae sodales dolor urna at turpis. Aliquam nec volutpat erat, eu pellentesque tortor. Integer accumsan varius sapien ac sagittis. In sed egestas risus, molestie venenatis nisl. Suspendisse tristique a purus nec dictum. Vestibulum accumsan cursus efficitur. Aliquam ac condimentum nibh, id ultrices diam. Nullam tempus lectus ut velit tempus, sed fermentum nisi suscipit. Phasellus auctor luctus felis.",
        tags: ["CSS", "Grid", "Web Design"],
        socials: [
            {
                link:"abc",
                icon:"/icons/linkedin.svg"
            }, 
            {
                link:"def",
                icon:"/icons/instagram.svg"
            },
        ]
    },
    {
        id: 4,
        title: "Introduction to Node.js",
        cover: "https://unsplash.com/photos/black-flat-screen-computer-monitor-oXlXu2qukGE",
        author: "Bob Williams",
        authorImage: "/newlogo_crop.png",
        authorBio: "Jane is a software engineer with a passion for writing and teaching. She has experience in web development and loves to share her knowledge with others.",
        date: "2023-07-10",
        description: "In this blog post, we will introduce Node.js, how it works, and why it is a popular choice for building server-side applications...",
        content: "Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It is built on the V8 JavaScript engine and provides a rich set of libraries and tools for building server-side applications. In this blog post, we will introduce Node.js, how it works, and why it is a popular choice for building server-side applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tortor vel urna consequat aliquam sit amet molestie ligula. Suspendisse feugiat tortor ac tempor vulputate. Phasellus dui sapien, laoreet eget viverra eu, consectetur id justo. Fusce ligula dolor, tristique id eleifend vel, maximus at quam. Quisque pulvinar fermentum odio. Maecenas quam metus, bibendum quis faucibus in, faucibus a ipsum. Nullam erat nisi, sagittis sed lobortis eu, ultricies id nisl. In pretium metus in turpis tristique, ac lacinia ante interdum. Ut feugiat laoreet ex at venenatis. Donec venenatis vestibulum magna, ac imperdiet nisi. Praesent lobortis lacus vel varius varius. Praesent orci ex, scelerisque in lacus et, semper vehicula mauris. Donec mattis orci eu arcu dapibus dignissim. Nullam placerat dapibus dolor sit amet cursus. In consectetur velit vitae dui interdum, non posuere sem hendrerit.\n Praesent fermentum, sem eget cursus ullamcorper, magna tellus malesuada urna, vitae sodales dolor urna at turpis. Aliquam nec volutpat erat, eu pellentesque tortor. Integer accumsan varius sapien ac sagittis. In sed egestas risus, molestie venenatis nisl. Suspendisse tristique a purus nec dictum. Vestibulum accumsan cursus efficitur. Aliquam ac condimentum nibh, id ultrices diam. Nullam tempus lectus ut velit tempus, sed fermentum nisi suscipit. Phasellus auctor luctus felis.",
        tags: ["Node.js", "JavaScript", "Backend"],
        socials: [
            {
                link:"abc",
                icon:"/icons/linkedin.svg"
            }, 
            {
                link:"def",
                icon:"/icons/instagram.svg"
            },
        ]
    }

];

export default blogContents;