import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { CgCreditCard } from "react-icons/cg";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineCar } from "react-icons/ai";
import { SlNote } from "react-icons/sl";
import { BsHouse } from "react-icons/bs";
export const ADdata = [
  {
    name: "ROUTING # 256078446",
    url: "#",
  },
  {
    name: "PARTNERS",
    url: "#",
  },
  {
    name: "MEMBER DISCOUNTS",
    url: "#",
  },
  {
    name: "WEALTH",
    url: "#",
  },
  {
    name: "FOUNDATION",
    url: "#",
  },
  {
    name: "BRANCHES & ATMS",
    url: "#",
  },
  {
    name: "ABOUT",
    url: "#",
  },
  {
    name: "SEARCH",
    url: "#",
  },
];

export const NavMenuUtilityList = [
  { icon: FiSearch, url: "/Blog" },
  { icon: FiHeart, url: "/WishList" },
  { icon: FiShoppingCart, url: "/Shoppingcart" },
];

export const NavMenunew = [
  {
    title: { name: "CHECKING & SAVINGS", url: "/" },
    childList: [
      {
        title: { name: "CHECKING", url: "/CHECKING" },
        childList: [
          {
            title: { name: "FREE CHECKING", url: "/FREE_CHECKING" },
            childList: [],
          },
          {
            title: {
              name: "ACCESS AMERICA CHECKING",
              url: "/ACCESS_AMERICA_CHECKING",
            },
            childList: [],
          },
          {
            title: {
              name: "ALL CHECKING ACCOUNTS",
              url: "/ALL_CHECKING_ACCOUNTS",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "SAVINGS", url: "/SAVINGS" },
        childList: [
          {
            title: {
              name: "PREMIUM ONLINESAVING ",
              url: "/PREMIUM_ONLINE_SAVING",
            },
            childList: [],
          },
          {
            title: {
              name: "REGULAR SAVINGS  ",
              url: "/REGULAR_SAVINGS",
            },
            childList: [],
          },
          {
            title: {
              name: "MONEYMARKETSAVINGS",
              url: "/MONEY_MARKET_SAVINGS",
            },
            childList: [],
          },
          {
            title: {
              name: "ALL SAVINGS ACCOUNTS",
              url: "/ALL_SAVINGS_ACCOUNTS",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "CERTIFICATES", url: "/CERTIFICATES" },
        childList: [
          {
            title: {
              name: "MONEY MARKET CERTIFICATE  ",
              url: "/MONEY_MARKET_CERTIFICATE",
            },
            childList: [],
          },
          {
            title: {
              name: "COVERDELL EDUCATION CERTIFICATE",
              url: "/COVERDELL_EDUCATION_CERTIFICATE",
            },
            childList: [],
          },
          {
            title: {
              name: "ALL CERTIFICATES",
              url: "/ALL_CERTIFICATES",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "IRAS", url: "/IRAS" },
        childList: [
          {
            title: { name: "IRA CERTIFICATE", url: "/IRA_CERTIFICATE" },
            childList: [],
          },
          {
            title: {
              name: "IRA PREMIER ",
              url: "/IRA_PREMIER",
            },
            childList: [],
          },
          {
            title: {
              name: "IRA SAVINGS ACCOUNT",
              url: "/IRA_SAVINGS_ACCOUNT",
            },
            childList: [],
          },
          {
            title: {
              name: "ALL IRAS",
              url: "/ALL_IRA",
            },
            childList: [],
          },
        ],
      },
    ],
  },
];
// { title:  { name: "CHECKING", url: "/CHECKING" },childList:[] }

export const navdatajson = [
  {
    title: { name: "CHECKING & SAVINGS", url: "/" },
    icon: TfiWrite,
    childList: [
      {
        title: { name: "CHECKING", url: "/CHECKING" },
        childList: [
          {
            title: { name: "FREE CHECKING", url: "/FREE_CHECKING" },
            childList: [],
          },
          {
            title: {
              name: "ACCESS AMERICA CHECKING",
              url: "/ACCESS_AMERICA_CHECKING",
            },
            childList: [],
          },
          {
            title: {
              name: "ALL CHECKING ACCOUNTS",
              url: "/ALL_CHECKING_ACCOUNTS",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "SAVINGS", url: "/SAVINGS" },
        childList: [
          {
            title: {
              name: "PREMIUM ONLINE SAVING",
              url: "/PREMIUM_ONLINE_SAVING",
            },
            childList: [],
          },
          {
            title: { name: "REGULAR SAVINGS", url: "/REGULAR_SAVINGS" },
            childList: [],
          },
          {
            title: {
              name: "MONEY MARKET SAVINGS",
              url: "/MONEY_MARKET_SAVINGS",
            },
            childList: [],
          },
          {
            title: {
              name: "ALL SAVINGS ACCOUNTS",
              url: "/ALL_SAVINGS_ACCOUNTS",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "CERTIFICATES", url: "/CERTIFICATES" },
        childList: [
          {
            title: {
              name: "MONEY MARKET CERTIFICATE",
              url: "/MONEY_MARKET_CERTIFICATE",
            },
            childList: [],
          },
          {
            title: {
              name: "COVERDELL EDUCATION CERTIFICATE",
              url: "/COVERDELL_EDUCATION_CERTIFICATE",
            },
            childList: [],
          },
          {
            title: { name: "ALL CERTIFICATES", url: "/ALL_CERTIFICATES" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "IRAS", url: "/IRAS" },
        childList: [
          {
            title: { name: "IRA CERTIFICATE", url: "/IRA_CERTIFICATE" },
            childList: [],
          },
          {
            title: { name: "IRA PREMIER", url: "/IRA_PREMIER" },
            childList: [],
          },
          {
            title: { name: "IRA SAVINGS ACCOUNT", url: "/IRA_SAVINGS_ACCOUNT" },
            childList: [],
          },
          {
            title: { name: "ALL IRAS", url: "/ALL_IRA" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "HOW CAN WE HELP?", url: "/HOW_CAN_WE_HELP" },
        childList: [
          {
            title: { name: "Contact Us", url: "/Contact_Us" },
            childList: [],
          },
          {
            title: { name: "FAQs", url: "/FAQs" },
            childList: [],
          },
          {
            title: { name: "Forms", url: "/IRA_SAVINGS_ACCOUNT" },
            childList: [],
          },
          {
            title: { name: "Advice Center", url: "/Advice_Center" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "", url: "/HOW_CAN_WE_HELP" },
        childList: [],
        url: {
          name: "https://www.penfed.org/content/dam/penfed/general/img/2022/global-nav/2022.06_PF_PFOL-Checking-Tiles-R3_Checking_300x250-3.jpg",
          url: "/Contact_Us",
        },
      },
    ],
  },

  {
    title: { name: "CREDIT CARDS", url: "/CREDIT_CARDS" },
    icon: CgCreditCard,
    childList: [
      {
        title: { name: "OUR CARDS", url: "/OUR_CARDS" },
        childList: [
          {
            title: {
              name: "CREDIT CARDS OVERVIEW",
              url: "/CREDIT_CARDS_OVERVIEW",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "HOW CAN WE HELP?", url: "/HOW_CAN_WE_HELP?" },
        childList: [
          {
            title: {
              name: "Contact Us",
              url: "/Contact_Us",
            },
            childList: [],
          },
          {
            title: {
              name: "FAQs",
              url: "/FAQs",
            },
            childList: [],
          },
          {
            title: {
              name: "Disclosures",
              url: "/Disclosures",
            },
            childList: [],
          },
          {
            title: {
              name: " Resource Center",
              url: "/Resource_Center",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "", url: "/HOW_CAN_WE_HELP" },
        childList: [],
        url: {
          name: "https://www.penfed.org/content/dam/penfed/general/img/2020/credit-cards/Gobal_Nav_Menu_Gold_3.jpg",
          url: "/Contact_Us",
        },
      },
    ],
  },
  {
    title: { name: "AUTO", url: "/AUTO" },
    icon: AiOutlineCar,
    childList: [
      {
        title: { name: "AUTO LOANS", url: "/AUTO_LOANS" },
        childList: [
          {
            title: {
              name: "AUTO LOANS APPLICATION",
              url: "/AUTO_LOANS_APPLICATION",
            },
            childList: [],
          },
          {
            title: {
              name: "CAR BUYING SERVICE",
              url: "/CAR_BUYING_SERVICE",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "HOW CAN WE HELP?", url: "/HOW_CAN_WE_HELP" },
        childList: [
          {
            title: { name: "Contact Us", url: "/Contact_Us" },
            childList: [],
          },
          {
            title: { name: "FAQs", url: "/FAQs" },
            childList: [],
          },
          {
            title: { name: "Forms", url: "/IRA_SAVINGS_ACCOUNT" },
            childList: [],
          },
          {
            title: { name: "Advice Center", url: "/Advice_Center" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "", url: "/HOW_CAN_WE_HELP" },
        childList: [],
        url: {
          name: "https://www.penfed.org/content/dam/penfed/general/img/2023/auto/auto-promo-website-images-r-2-300-x-250-universal-nav-bar-updated.jpg",
          url: "/Contact_Us",
        },
      },
    ],
  },
  {
    title: { name: "LOANS", url: "/LOANS" },
    icon: AiOutlineCar,
    childList: [
      {
        title: { name: "PERSONAL LOANS", url: "/PERSONAL_LOANS" },
        childList: [
          {
            title: {
              name: "Personal Loans",
              url: "/Personal_Loans",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "STUDENT LOANS", url: "/STUDENT_LOANS" },
        childList: [
          {
            title: {
              name: "Student Loan Refinancing",
              url: "/Student_Loan_Refinancing",
            },
            childList: [],
          },
          {
            title: {
              name: "In-School Student Loans",
              url: "/In-School_Student_Loans",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "HOW CAN WE HELP?", url: "/HOW_CAN_WE_HELP" },
        childList: [
          {
            title: { name: "Contact Us", url: "/Contact_Us" },
            childList: [],
          },
          {
            title: { name: "FAQs", url: "/FAQs" },
            childList: [],
          },
          {
            title: { name: "Forms", url: "/IRA_SAVINGS_ACCOUNT" },
            childList: [],
          },
          {
            title: { name: "Advice Center", url: "/Advice_Center" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "", url: "/HOW_CAN_WE_HELP" },
        childList: [],
        url: {
          name: "https://www.penfed.org/content/dam/penfed/general/img/2018/globalnav/globalnav_promo_newstudentloanoption_300x250.jpg",
          url: "/Contact_Us",
        },
      },
    ],
  },

  {
    title: { name: "MORTGAGE & HOME EQUITY", url: "/MORTGAGE_&_HOME_EQUITY" },
    icon: BsHouse,
    childList: [
      {
        title: { name: "PURCHASE", url: "/PURCHASE" },
        childList: [
          {
            title: { name: "BUY A HOME", url: "/BUY_A_HOME" },
            childList: [],
          },
          {
            title: {
              name: "VA LOAN ",
              url: "/VA_LOAN",
            },
            childList: [],
          },
          {
            title: {
              name: "FHA",
              url: "/FHA",
            },
            childList: [],
          },
          {
            title: {
              name: "CONVENTIONAL FIXED",
              url: "/CONVENTIONAL FIXED",
            },
            childList: [],
          },
          {
            title: {
              name: "JUMBO LOAN",
              url: "/JUMBO_LOAN",
            },
            childList: [],
          },
          {
            title: {
              name: "ARM",
              url: "/ARM",
            },
            childList: [],
          },
          {
            title: {
              name: "POWER BUYER",
              url: "/POWER_BUYER",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "REFINANCE", url: "/REFINANCE" },
        childList: [
          {
            title: {
              name: "REFINANCE YOUR HOME",
              url: "/REFINANCE_YOUR_HOME",
            },
            childList: [],
          },
          {
            title: { name: "VA STREAMLINE", url: "/VA_STREAMLINE" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "HOME EQUITY", url: "/HOME_EQUITY" },
        childList: [
          {
            title: {
              name: "HELOC",
              url: "/HELOC",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "TOOLS & RESOURCES", url: "/TOOLS_&_RESOURCES" },
        childList: [
          {
            title: {
              name: "First-Time Homebuyer",
              url: "/First-Time_Homebuyer",
            },
            childList: [],
          },
          {
            title: {
              name: "PenFed Title, LLC",
              url: "/PenFed_Title,_LLC",
            },
            childList: [],
          },
          {
            title: {
              name: "Mortgage Knowledge Center",
              url: "/Mortgage_Knowledge_Center",
            },
            childList: [],
          },
          {
            title: {
              name: "Mortgage Calculators",
              url: "/Mortgage_Calculators",
            },
            childList: [],
          },
          {
            title: {
              name: "Contact PenFed Mortgage Team",
              url: "/Contact_PenFed_Mortgage_Team",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "", url: "/HOW_CAN_WE_HELP" },
        childList: [],
        url: {
          name: "https://www.penfed.org/content/dam/penfed/general/img/2022/global-nav/mortgage-imagesglobalnav-promo-powercash.jpeg",
          url: "/Contact_Us",
        },
      },
    ],
  },
  {
    title: { name: "LEARN", url: "/LEARN" },
    icon: AiOutlineCar,
    childList: [
      {
        title: { name: "LEARNING HUB", url: "/LEARNING_HUB" },
        childList: [
          {
            title: {
              name: "Learning Center",
              url: "/Learning_Center",
            },
            childList: [],
          },
          {
            title: {
              name: "Mortgage Knowledge Center",
              url: "/Mortgage_Knowledge_Center",
            },
            childList: [],
          },
          {
            title: {
              name: "Calculators",
              url: "/Calculators",
            },
            childList: [],
          },
          {
            title: {
              name: "Advice Center",
              url: "/Advice_Center",
            },
            childList: [],
          },
          {
            title: {
              name: "Financial Hardship Center",
              url: "/Financial_Hardship_Center",
            },
            childList: [],
          },
          {
            title: {
              name: "Emergency Furlough Relief Assistance",
              url: "/Emergency_Furlough_Relief_Assistance",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "ABOUT PENFED", url: "/ABOUT_PENFED" },
        childList: [
          {
            title: {
              name: "Advice Center",
              url: "/Advice_Center",
            },
            childList: [],
          },
          {
            title: {
              name: "FAQs",
              url: "/FAQs",
            },
            childList: [],
          },
          {
            title: {
              name: "Forms",
              url: "/Forms",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "SECURITY & FRAUD", url: "/SECURITY_&_FRAUD" },
        childList: [
          {
            title: {
              name: "Security Center",
              url: "/Security_Center",
            },
            childList: [],
          },
        ],
      },

      {
        title: { name: "PROTECTION", url: "/PROTECTION" },
        childList: [
          {
            title: {
              name: "Extended Warranty",
              url: "/Extended_Warranty",
            },
            childList: [],
          },
          {
            title: {
              name: "GAP Insurance",
              url: "/GAP_Insurance",
            },
            childList: [],
          },
          {
            title: {
              name: "Debt_Protection",
              url: "/Debt_Protection",
            },
            childList: [],
          },
        ],
      },

      {
        title: { name: "HOW CAN WE HELP?", url: "/HOW_CAN_WE_HELP" },
        childList: [
          {
            title: { name: "Press Room", url: "/Press_Room" },
            childList: [],
          },
          {
            title: { name: "Careers", url: "/Careers" },
            childList: [],
          },
          {
            title: { name: "Contact Us", url: "/Contact_Us" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "", url: "/HOW_CAN_WE_HELP" },
        childList: [],
        url: {
          name: "https://www.penfed.org/content/dam/penfed/general/img/2022/TurboTax%20Image.jpeg",
          url: "/Contact_Us",
        },
      },
    ],
  },
];
