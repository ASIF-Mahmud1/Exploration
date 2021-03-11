
//Popular Opinions
const popularOpinion =
{
  brave: { count: 2, eventIdList: [1, 3] },
  ambitious: { count: 1, eventIdList: [3] }
}

//Popular tags of  Opinions
const PopularTagsOfAnOpinion =
{
  totalOpinions: 3,
  opinions:
  {
    brave:
    {
      count: 2,
      eventIdList: [1, 3],
      tag: 
      { 
        adventurous: 2, fiction: 1, science: 1 
      },
      tagCount: 4
    },
    ambitious:
    {
      count: 1,
      eventIdList: [3],
      tag: 
      { 
        science: 1, adventurous: 1
      },
      tagCount: 2
    }
  }
}

// Tag Probability Table
const tagWithProbability=
 {
  adventurous: 0.5,
  fiction: 0.16666666666666666,
  science: 0.3333333333333333
 }