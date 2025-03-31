const questions = [
  {
    "id": 1,
    "value": "If I have extra income, I'd prefer to hold on to it rather than use it. I tend to let my money sit to build on its own, rather than risk my money.",
    "points": {
      "sa": {
        "saver": 8
      },
      "a": {
        "saver": 4,
        "compulsive": 2,
        "indifferent": 2
      },
      "n": {
        "saver": 2,
        "investor": 2,
        "compulsive": 1,
        "indifferent": 1,
        "shopper": 1,
        "gambler": 1
      },
      "d": {
        "investor": 4,
        "shopper": 2,
        "gambler": 2
      },
      "sd": {
        "investor": 8
      }
    },
    "spectrum_points": {
      "sa": [8, 8],
      "a": [4, 4],
      "d": [-4, -2],
      "sd": [-8, -4]
    }
  },
  {
    "id": 2,
    "value": "I'm okay with setting aside some money from what I earn for unexpected situations. I can ensure it keeps growing steadily without using it for anything that's not an emergency.",
    "points": {
      "sa": {
        "saver": 8
      },
      "a": {
        "saver": 4,
        "investor": 2,
        "compulsive": 2
      },
      "n": {
        "saver": 2,
        "debtor": 2,
        "compulsive": 1,
        "investor": 1,
        "spender": 1,
        "gambler": 1
      },
      "d": {
        "debtor": 4,
        "spender": 2,
        "gambler": 2
      },
      "sd": {
        "debtor": 8
      }
    },
    "spectrum_points": {
      "sa": [8, 8],
      "a": [4, 4],
      "d": [-4, -4],
      "sd": [-8, -8]
    }
  },
  {
    "id": 3,
    "value": "I often spend more money than I actually have because I want to maintain a certain lifestyle.",
    "points": {
      "sa": {
        "spender": 8
      },
      "a": {
        "spender": 4,
        "gambler": 2,
        "debtor": 2
      },
      "n": {
        "spender": 2,
        "saver": 2,
        "gambler": 1,
        "debtor": 1,
        "indifferent": 1,
        "investor": 1
      },
      "d": {
        "saver": 4,
        "indifferent": 2,
        "investor": 2
      },
      "sd": {
        "saver": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 4],
      "sd": [8, 8]
    }
  },
  {
    "id": 4,
    "value": "What really motivates me to earn more money is having luxury goods.",
    "points": {
      "sa": {
        "spender": 8
      },
      "a": {
        "spender": 4,
        "compulsive": 2,
        "shopper": 2
      },
      "n": {
        "spender": 2,
        "indifferent": 2,
        "compulsive": 1,
        "shopper": 1,
        "saver": 1,
        "investor": 1
      },
      "d": {
        "indifferent": 4,
        "saver": 2,
        "investor": 2
      },
      "sd": {
        "indifferent": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 4],
      "sd": [8, 8]
    }
  },
  {
    "id": 5,
    "value": "I always look for deals or coupons to save money, and I'm often attracted to discount sales. I could buy higher-quality stuff, but they would cost more because of the quality. I prefer cheaper things because that's even better for my wallet.",
    "points": {
      "sa": {
        "shopper": 8
      },
      "a": {
        "shopper": 4,
        "debtor": 2,
        "saver": 2
      },
      "n": {
        "shopper": 2,
        "spender": 2,
        "debtor": 1,
        "gambler": 1,
        "saver": 1,
        "investor": 1
      },
      "d": {
        "spender": 4,
        "gambler": 2,
        "investor": 2
      },
      "sd": {
        "spender": 8
      }
    },
    "spectrum_points": {
      "sa": [8, 8],
      "a": [4, 4],
      "d": [-4, -4],
      "sd": [-8, -8]
    }
  },
  {
    "id": 6,
    "value": "Spending money is much more enjoyable than making it. Often, my happiness depends on my capacity to splurge.",
    "points": {
      "sa": {
        "shopper": 8
      },
      "a": {
        "shopper": 4,
        "spender": 2,
        "gambler": 2
      },
      "n": {
        "shopper": 2,
        "compulsive": 2,
        "debtor": 1,
        "gambler": 1,
        "spender": 1,
        "indifferent": 1
      },
      "d": {
        "compulsive": 4,
        "debtor": 2,
        "indifferent": 2
      },
      "sd": {
        "compulsive": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 4],
      "sd": [8, 8]
    }
  },
  {
    "id": 7,
    "value": "I find it difficult to take breaks or provide myself with leisure time. I feel a sense of anxiety or restlessness when I am not working or actively engaged in money-making endeavors.",
    "points": {
      "sa": {
        "compulsive": 8
      },
      "a": {
        "compulsive": 4,
        "investor": 2,
        "debtor": 2
      },
      "n": {
        "compulsive": 2,
        "indifferent": 2,
        "debtor": 1,
        "spender": 1,
        "saver": 1,
        "investor": 1
      },
      "d": {
        "indifferent": 4,
        "spender": 2,
        "saver": 2
      },
      "sd": {
        "indifferent": 8
      }
    },
    "spectrum_points": {
      "sa": [4, -8],
      "a": [2, -4],
      "d": [-2, 4],
      "sd": [-4, 8]
    }
  },
  {
    "id": 8,
    "value": "I feel good when my friends congratulate me on my successes. Sometimes, especially when it comes to money, I could place too much value on what other people think.",
    "points": {
      "sa": {
        "compulsive": 8
      },
      "a": {
        "compulsive": 4,
        "shopper": 2,
        "spender": 2
      },
      "n": {
        "compulsive": 2,
        "gambler": 2,
        "debtor": 1,
        "spender": 1,
        "shopper": 1,
        "indifferent": 1
      },
      "d": {
        "gambler": 4,
        "indifferent": 2,
        "debtor": 2
      },
      "sd": {
        "gambler": 8
      }
    },
    "spectrum_points": {
      "sa": [8, -8],
      "a": [4, -4],
      "d": [-4, 4],
      "sd": [-8, 8]
    }
  },
  {
    "id": 9,
    "value": "I want to avoid going through my finances and organizing them. It makes me uncomfortable to look closely at how or where I spend my money.",
    "points": {
      "sa": {
        "debtor": 8
      },
      "a": {
        "debtor": 4,
        "gambler": 2,
        "shopper": 2
      },
      "n": {
        "debtor": 2,
        "investor": 2,
        "gambler": 1,
        "saver": 1,
        "shopper": 1,
        "compulsive": 1
      },
      "d": {
        "investor": 4,
        "saver": 2,
        "compulsive": 2
      },
      "sd": {
        "investor": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 4],
      "sd": [8, 8]
    }
  },
  {
    "id": 10,
    "value": "I avoid spending money as much as possible, and I really don't like figuring out ways to save. I become nervous when I have to spend money frequently.",
    "points": {
      "sa": {
        "debtor": 8
      },
      "a": {
        "debtor": 4,
        "saver": 2,
        "indifferent": 2
      },
      "n": {
        "debtor": 2,
        "shopper": 2,
        "indifferent": 1,
        "saver": 1,
        "spender": 1,
        "gambler": 1
      },
      "d": {
        "shopper": 4,
        "spender": 2,
        "gambler": 2
      },
      "sd": {
        "shopper": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 4],
      "sd": [8, 8]
    }
  },
  {
    "id": 11,
    "value": "I don't live to work; I work to live",
    "points": {
      "sa": {
        "indifferent": 8
      },
      "a": {
        "indifferent": 4,
        "debtor": 2,
        "shopper": 2
      },
      "n": {
        "indifferent": 2,
        "compulsive": 2,
        "saver": 1,
        "investor": 1,
        "debtor": 1,
        "shopper": 1
      },
      "d": {
        "compulsive": 4,
        "saver": 2,
        "investor": 2
      },
      "sd": {
        "compulsive": 8
      }
    },
    "spectrum_points": {
      "sa": [8, 8],
      "a": [4, 4],
      "d": [-4, -4],
      "sd": [-8, -8]
    }
  },
  {
    "id": 12,
    "value": "Instead of money defining how content, successful, or secure I am, I view money as a tool that enables me to have various experiences and opportunities.",
    "points": {
      "sa": {
        "indifferent": 8
      },
      "a": {
        "indifferent": 4,
        "gambler": 2,
        "investor": 2
      },
      "n": {
        "indifferent": 2,
        "saver": 2,
        "gambler": 1,
        "investor": 1,
        "spender": 1,
        "compulsive": 1
      },
      "d": {
        "saver": 4,
        "spender": 2,
        "compulsive": 2
      },
      "sd": {
        "saver": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -4],
      "a": [-4, -2],
      "d": [4, 2],
      "sd": [8, 4]
    }
  },
  {
    "id": 13,
    "value": "I can stay patient when faced with problems or setbacks to grow my money. I'm good at controlling impulsive actions, like spending too much or being greedy, because I understand and manage my emotions well.",
    "points": {
      "sa": {
        "investor": 8
      },
      "a": {
        "investor": 4,
        "compulsive": 2,
        "indifferent": 2
      },
      "n": {
        "investor": 2,
        "gambler": 2,
        "compulsive": 1,
        "indifferent": 1,
        "debtor": 1,
        "shopper": 1
      },
      "d": {
        "gambler": 4,
        "shopper": 2,
        "debtor": 2
      },
      "sd": {
        "gambler": 8
      }
    },
    "spectrum_points": {
      "sa": [8, 8],
      "a": [4, 4],
      "d": [-4, -4],
      "sd": [-8, -8]
    }
  },
  {
    "id": 14,
    "value": "I understand that money is important for feeling secure, but I can keep my emotions separate from my finances. I can adjust my spending habits based on how much money I have and make the most of it, knowing that money can come and go.",
    "points": {
      "sa": {
        "investor": 8
      },
      "a": {
        "investor": 4,
        "saver": 2,
        "indifferent": 2
      },
      "n": {
        "investor": 2,
        "spender": 2,
        "saver": 1,
        "indifferent": 1,
        "debtor": 1,
        "shopper": 1
      },
      "d": {
        "spender": 4,
        "shopper": 2,
        "debtor": 2
      },
      "sd": {
        "spender": 8
      }
    },
    "spectrum_points": {
      "sa": [4, 8],
      "a": [2, 4],
      "d": [-4, -4],
      "sd": [-8, -8]
    }
  },
  {
    "id": 15,
    "value": "When I lose money, it really gets me down and messes with my emotions and/or thoughts. I feel the urge to bounce back fast from these losses, not just for my money but for my mental health too.",
    "points": {
      "sa": {
        "gambler": 8
      },
      "a": {
        "gambler": 4,
        "saver": 2,
        "spender": 2
      },
      "n": {
        "gambler": 2,
        "shopper": 2,
        "saver": 1,
        "spender": 1,
        "indifferent": 1,
        "compulsive": 1
      },
      "d": {
        "shopper": 4,
        "indifferent": 2,
        "compulsive": 2
      },
      "sd": {
        "shopper": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 2],
      "sd": [8, 4]
    }
  },
  {
    "id": 16,
    "value": "I'm willing to take risky chances and invest a lot of money, and I believe those risks will eventually lead to big rewards. As the saying goes, \“Sometimes you gotta spend money to make money.\”",
    "points": {
      "sa": {
        "gambler": 8
      },
      "a": {
        "gambler": 4,
        "investor": 2,
        "spender": 2
      },
      "n": {
        "gambler": 2,
        "debtor": 2,
        "investor": 1,
        "spender": 1,
        "shopper": 1,
        "compulsive": 1
      },
      "d": {
        "debtor": 4,
        "shopper": 2,
        "compulsive": 2
      },
      "sd": {
        "debtor": 8
      }
    },
    "spectrum_points": {
      "sa": [-4, -8],
      "a": [-2, -4],
      "d": [4, 2],
      "sd": [8, 4]
    }
  }
];
