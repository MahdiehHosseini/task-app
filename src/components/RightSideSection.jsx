
import image from './../assets/image.jpg'

function RightSideSection() {
    return (
      <section className='text-right mr-20 flex flex-col justify-center items-end w-full'>
        <img className=" w-80 h-80 rounded-2xl" alt='image' src={image}  />
        <h1 className="my-7 text-2xl">عکس و متن </h1>
        <p className="text-lg w-3/4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>
      </section>
    )
}
  
export default RightSideSection
  