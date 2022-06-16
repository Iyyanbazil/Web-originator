import Pages from './page.modal';

export const createPage= async (pageBody)=>{
const slug =pageBody.name.toLowerCase().split(" ").join("-");
pageBody.slug=slug;

const page =new Pages(pageBody);
const pageResponse=await page.save();
    // window.location.href="http://localhost:3000/"
return pageResponse
};

export const listPages= async ()=>{
const pages = await Pages.find({});
return pages
};

export const deletePage= async (pageId)=>{
const pages =await Pages.deleteOne({_id:pageId})
return pages
};
export const updatePage= async (pageId,pageBody)=>{};

export const pagedetails= async (pageId)=>{
const page=await Pages.findOne({_id:pageId})
return page
};

export const savePageContent= async (pageId,pageContent)=>{
const page = await Pages.findOneAndUpdate({_id:pageId},{content:pageContent});
return page;
} ;
export const homeDel =async (id)=>{
const pages =await Pages.deleteOne({_id:id})
return pages;
}