import { Component } from '@angular/core';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ NavbarComponent, FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {
  searchTerm: string = '';
  searchFocused: boolean = false;
  courses = [
    { name: 'Introduction to Computer Science', 
      professor: 'Dr. John Doe', 
      price: 150, 
      image: 'assets/5g-technology.jpg',
      description: 'This course provides an overview of computer science concepts, including algorithms, programming, and system design.',
      showMore: false },
      {
        name: 'Data Structures and Algorithms',
        professor: 'Prof. Jane Smith',
        price: 200,
        image: '/assets/artificial-neural-networks.jpg',
        description: 'Learn about essential data structures and algorithms to solve computational problems efficiently.',
        showMore: false,
      },
      {
        name: 'Artificial Intelligence',
        professor: 'Dr. Richard Roe',
        price: 250,
        image: '/assets/ai.jpg',
        description: 'Explore the foundations of AI, including machine learning, neural networks, and natural language processing.',
        showMore: false,
      },
      {
        name: 'Web Development',
        professor: 'Prof. Emily Johnson',
        price: 100,
        image: '/assets/web.jpg',
        description: 'Master the skills to build modern web applications using HTML, CSS, JavaScript, and frameworks.',
        showMore: false,
      },
      {
        name: 'Machine Learning',
        professor: 'Dr. Alice Brown',
        price: 150,
        image: '/assets/ml.jpg',
        description: 'Dive into machine learning concepts, algorithms, and real-world applications.',
        showMore: false,
      },
      {
        name: 'Cloud Computing',
        professor: 'Prof. David Green',
        price: 180,
        image: '/assets/cloud.jpg',
        description: 'Understand cloud architecture, services, and deployment models with hands-on experience.',
        showMore: false,
      },
      {
        name: 'Cyber Security',
        professor: 'Dr. Mary White',
        price: 250,
        image: '/assets/cyber.jpg',
        description: 'Learn the essentials of cybersecurity, including threat analysis, prevention, and ethical hacking.',
        showMore: false,
      },
      {
        name: 'Blockchain',
        professor: 'Prof. James Wilson',
        price: 150,
        image: '/assets/blockchain.jpg',
        description: 'Get introduced to blockchain technology, smart contracts, and cryptocurrency concepts.',
        showMore: false,
      },
      {
        name: 'Data Science',
        professor: 'Dr. Emma Johnson',
        price: 200,
        image: 'assets/ds.jpg',
        description: 'Learn how to analyze, visualize, and extract insights from data using statistical methods.',
        showMore: false,
      },
      {
        name: 'Database Systems',
        professor: 'Dr. John Smith',
        price: 250,
        image: 'assets/dbms.jpg',
        description: 'Understand database management systems, SQL, and data modeling techniques.',
        showMore: false,
      },
      {
        name: 'Web Design',
        professor: 'Prof. Sarah Johnson',
        price: 100,
        image: 'assets/webdesign.jpg',
        description: 'Learn to design visually appealing and user-friendly websites with UX/UI principles.',
        showMore: false,
      },
      {
        name: 'Mobile App Development',
        professor: 'Dr. David Smith',
        price: 150,
        image: 'assets/mobile.jpg',
        description: 'Develop mobile applications for iOS and Android platforms using modern tools and frameworks.',
        showMore: false,
      },
      {
        name: 'Game Development',
        professor: 'Prof. Jessica Adams',
        price: 150,
        image: 'assets/game.jpg',
        description: 'Create engaging games using game engines, design principles, and programming techniques.',
        showMore: false,
      },
      {
        name: 'Operating Systems',
        professor: 'Dr. Michael Brown',
        price: 250,
        image: 'assets/os.jpg',
        description: 'Understand the core concepts of operating systems, including process management, memory allocation, and file systems.',
        showMore: false,
      },
      {
        name: 'Software Engineering',
        professor: 'Dr. Steve White',
        price: 150,
        image: 'assets/software-engineering.jpg',
        description: 'Learn the principles of software development, lifecycle models, and best practices for designing software solutions.',
        showMore: false,
      },
      {
        name: 'Augmented Reality',
        professor: 'Prof. George Thomas',
        price: 350,
        image: 'assets/augmented-reality.jpg',
        description: 'Explore AR technology and its applications in gaming, education, and interactive experiences.',
        showMore: false,
      },
      {
        name: 'Virtual Reality',
        professor: 'Dr. Lisa Miller',
        price: 150,
        image: 'assets/virtual-reality.jpg',
        description: 'Dive into the immersive world of virtual reality, covering hardware, software, and real-world applications.',
        showMore: false,
      },
      {
        name: 'Data Analytics',
        professor: 'Dr. Peter Clark',
        price: 400,
        image: 'assets/data-analytics.jpg',
        description: 'Analyze and interpret data to gain insights, using statistical and computational techniques.',
        showMore: false,
      },
      {
        name: 'Software Testing',
        professor: 'Prof. Laura Lewis',
        price: 150,
        image: 'assets/software-testing.jpg',
        description: 'Master software testing methodologies to ensure quality and reliability of software products.',
        showMore: false,
      },
      {
        name: 'Digital Marketing',
        professor: 'Prof. Richard Scott',
        price: 100,
        image: 'assets/digital-marketing.jpg',
        description: 'Learn strategies and tools for effective digital marketing, including SEO, SEM, and social media marketing.',
        showMore: false,
      },
      {
        name: 'Artificial Neural Networks',
        professor: 'Dr. Anna Smith',
        price: 300,
        image: 'assets/artificial-neural-networks.jpg',
        description: 'Understand the structure and working of artificial neural networks and their applications in AI.',
        showMore: false,
      },
      {
        name: 'Internet of Things',
        professor: 'Prof. Mark Johnson',
        price: 250,
        image: 'assets/internet-of-things.jpg',
        description: 'Explore IoT systems, architecture, and their role in connecting devices and sensors globally.',
        showMore: false,
      },
      {
        name: 'Robotics',
        professor: 'Dr. Lucas Green',
        price: 200,
        image: 'assets/robotics.jpg',
        description: 'Learn the fundamentals of robotics, including kinematics, control systems, and AI integration.',
        showMore: false,
      },
      {
        name: 'Ethical Hacking',
        professor: 'Dr. Ethan Clark',
        price: 150,
        image: 'assets/ethical-hacking.jpg',
        description: 'Master ethical hacking techniques to identify and fix vulnerabilities in computer systems.',
        showMore: false,
      },
      {
        name: '5G Technology',
        professor: 'Prof. Olivia Taylor',
        price: 100,
        image: 'assets/5g-technology.jpg',
        description: 'Understand the principles of 5G technology and its implications for telecommunications and IoT.',
        showMore: false,
      },
      {
        name: 'Quantum Computing',
        professor: 'Dr. Michael Harris',
        price: 250,
        image: 'assets/quantum-computing.jpg',
        description: 'Discover the basics of quantum computing and its potential applications in computing and cryptography.',
        showMore: false,
      },
      {
        name: 'Computer Vision',
        professor: 'Dr. Natalie Roberts',
        price: 150,
        image: 'assets/computer-vision.jpg',
        description: 'Learn techniques and algorithms used in computer vision to process and analyze visual data.',
        showMore: false,
      },
      {
        name: 'Network Security',
        professor: 'Prof. Richard Lee',
        price: 350,
        image: 'assets/network-security.jpg',
        description: 'Understand network security protocols and measures to protect networks against cyber threats.',
        showMore: false,
      },
      {
        name: 'Data Analytics',
        professor: 'Prof. Mathies',
        price: 250,
        image: 'assets/Data-Analytics1.jpg',
        description: 'Gain expertise in advanced data analytics techniques to extract actionable insights from data.',
        showMore: false,
      },
      {
        name: 'Search Engine Optimization',
        professor: 'Prof. Thiago',
        price: 150,
        image: 'assets/Search-Engine.jpg',
        description: 'Learn the art of optimizing websites to rank higher on search engines and increase visibility.',
        showMore: false,
      },
  ];
  filteredCourses = [...this.courses]; // All courses for dropdown
  displayedCourses = [...this.courses]; // All courses initially displayed


toggleReadMore(course: any) {
  course.showMore = !course.showMore;
}

  updateDropdown() {
    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  filterTopCourse() {
    if (this.filteredCourses.length > 0) {
        const topCourse = this.filteredCourses[0];
        this.selectCourse(topCourse); // Display only the top course
    }
}

selectCourse(course: any) {
    this.displayedCourses = [course]; // Display only the selected course
    this.filteredCourses = []; // Clear the dropdown
    this.searchTerm = ''; // Clear the search bar
    this.searchFocused = false; // Hide the dropdown
}

resetDashboard() {
    this.displayedCourses = [...this.courses]; // Reset to show all courses
    this.searchTerm = ''; // Clear the search bar
    this.filteredCourses = [...this.courses]; // Reset dropdown options
}

  onSearchBlur() {
    // Delay hiding dropdown to allow click event to register
    setTimeout(() => {
      this.searchFocused = false;
    }, 200);
  }
}

