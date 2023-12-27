import "./stylesheet.css";
import {
  Breadcrumb,
  Button,
  CardSingle,
  Container,
  Footer,
  HasTag,
  Header,
  Input,
  ProfileCard,
  SwiperSilder,
  Title,
  TextEditor,
} from "../../components";
import { BreadcrumbDemo, HasTagDemo, Icons, recentPost } from "../../utility";
import { TextArea, UploadPicture } from "../../components/Form";
import { avater1, avater2 } from "../../assets/img";
import { SwiperSlide } from "swiper/react";
// import { Grid } from 'swiper/modules';

export const StyleSheet = () => {
  return (
    <section className="mt-10">
      <Container>
        <div className="style-guide-wrapper px-2 py-0 block">
          <Header />
        </div>

        <div className="flex-wrap style-guide-wrapper">
          <div className="flex flex-col gap-2">
            <h2>Button Primary</h2>
            <Button variant="primary">btn-primary</Button>
            <Button variant="primary" disabled>
              btn-primary
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <h2>prefix icon</h2>
            <Button variant="primary">{Icons.userIcon} btn-primary</Button>
            <Button variant="primary" disabled>
              {Icons.userIcon} btn-primary
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <h2>suffix icon</h2>
            <Button variant="primary">btn-primary {Icons.userIcon}</Button>
            <Button variant="primary" disabled>
              btn-primary {Icons.userIcon}
            </Button>
          </div>
        </div>

        <div className="flex-wrap style-guide-wrapper">
          <div className="flex flex-col gap-2">
            <h2>Button secondary</h2>
            <Button variant="secondary">btn-secondary</Button>
            <Button variant="secondary" disabled>
              btn-secondary
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <h2>prefix icon</h2>
            <Button variant="secondary">{Icons.userIcon} btn-secondary</Button>
            <Button variant="secondary" disabled>
              {Icons.userIcon} btn-secondary
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <h2>suffix icon</h2>
            <Button variant="secondary">btn-secondary {Icons.userIcon}</Button>
            <Button variant="secondary" disabled>
              btn-secondary {Icons.userIcon}
            </Button>
          </div>
        </div>

        <div className="flex-wrap style-guide-wrapper">
          <div className="flex flex-col gap-2">
            <h2>third</h2>
            <Button variant="third">Btn-third</Button>
            <Button variant="third" disabled>
              btn-third
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <h2>prefix icon</h2>
            <Button variant="third">{Icons.userIcon} btn-third</Button>
            <Button variant="third" disabled>
              {Icons.userIcon} btn-third
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <h2>suffix icon</h2>
            <Button variant="third">btn-third {Icons.userIcon}</Button>
            <Button variant="third" disabled>
              btn-third {Icons.userIcon}
            </Button>
          </div>
        </div>

        <div className="flex-wrap style-guide-wrapper block w-full">
          <h2>Swiper Design</h2>
          <SwiperSilder slidesPerView={3} spaceBetween={20}>
            {recentPost.map((content, index) => (
              <SwiperSlide key={index}>
                <CardSingle
                  RatioImagesParentClass="w-full before:pb-[150%]"
                  cardTitle={content.cardTitle}
                  src={content.src}
                  cardContent={content.cardContent}
                />
              </SwiperSlide>
            ))}
          </SwiperSilder>
        </div>

        <div className="flex-col style-guide-wrapper">
          <span className="underline">typography</span>
          <h1>Heading Line H1 36px</h1>
          <h2>Heading Line H2 31px</h2>
          <h3>Heading Line H3 25px</h3>
          <h4>Heading Line H4 20px</h4>
          <h5>Heading Line H5 16px</h5>
          <h6>Heading Line H6 13px</h6>
          <p>paragraph 18px</p>
          <h5 className="title">Title</h5>
          <h6 className="subtitle">subTitle</h6>
        </div>

        <div className="flex-wrap style-guide-wrapper bg-[#C3C3C3]">
          <div>
            <h2 className="text-center">Primary colors ( base : #F81539 )</h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <div className="style-color-circle bg-primary">Primary</div>
              <div className="style-color-circle bg-primary-75">primary-75</div>
              <div className="style-color-circle bg-primary-50">primary-50</div>
              <div className="style-color-circle bg-primary-25">primary-25</div>
              <div className="style-color-circle bg-primary-10">primary-10</div>
              <div className="style-color-circle bg-primary-5">Primary-5</div>
            </div>
          </div>
          <div>
            <h2 className="text-center">secondary colors ( base : #F81539 )</h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <div className="style-color-circle bg-secondary">secondary</div>
              <div className="style-color-circle bg-secondary-75">
                secondary-75
              </div>
              <div className="style-color-circle bg-secondary-50">
                secondary-50
              </div>
              <div className="style-color-circle bg-secondary-25">
                secondary-25
              </div>
              <div className="style-color-circle bg-secondary-10">
                secondary-10
              </div>
              <div className="style-color-circle bg-secondary-5">
                secondary-5
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-center">Black colors ( base : #3E3232 )</h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <div className="style-color-circle bg-black">black</div>
              <div className="style-color-circle bg-black-75">black-75</div>
              <div className="style-color-circle bg-black-50">black-50</div>
              <div className="style-color-circle bg-black-25">black-25</div>
              <div className="style-color-circle bg-black-10">black-10</div>
              <div className="style-color-circle bg-black-5">black-5</div>
            </div>
          </div>
          <div>
            <h2 className="text-center">Dark colors ( base : #000000 )</h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <div className="style-color-circle bg-dark">dark</div>
              <div className="style-color-circle bg-dark-75">dark-75</div>
              <div className="style-color-circle bg-dark-50">dark-50</div>
              <div className="style-color-circle bg-dark-25">dark-25</div>
              <div className="style-color-circle bg-dark-10">dark-10</div>
              <div className="style-color-circle bg-dark-5">dark-5</div>
            </div>
          </div>
          <div>
            <h2 className="text-center">White colors ( base : #FFFFFF )</h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <div className="style-color-circle bg-white text-dark">white</div>
              <div className="style-color-circle bg-white-75 text-dark">
                white-75
              </div>
              <div className="style-color-circle bg-white-50 text-dark">
                white-50
              </div>
              <div className="style-color-circle bg-white-25">white-25</div>
              <div className="style-color-circle bg-white-10">white-10</div>
              <div className="style-color-circle bg-white-5">white-5</div>
            </div>
          </div>
        </div>

        <div className="style-guide-wrapper">
          <h2 className="text-center">Image Ratio Demo</h2>
          <div className="ratio ratio-demo">
            <img
              src="https://images.unsplash.com/photo-1415639636295-61ae91a98b39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="demo-img"
            />
          </div>
        </div>

        <div className="flex-col style-guide-wrapper">
          <h2 className="text-center">BreadcrumbDemo</h2>
          <Breadcrumb>{BreadcrumbDemo}</Breadcrumb>
        </div>

        <div className="flex-col style-guide-wrapper">
          <h2 className="text-center">Title</h2>
          <Title>Title Demo</Title>
        </div>

        <div className="flex-col style-guide-wrapper">
          <h2 className="text-center">Single Content Card</h2>
          <div className="grid w-full gap-5 grid-cols-3">
            <CardSingle
              imgParenClassName="ratio"
              cardTitle="Title"
              src={avater1}
              cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            />
            <CardSingle
              imgParenClassName="ratio"
              cardTitle="Title"
              cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              isVideo
              src={avater1}
            />
            <div>
              <h2 className="text-center">Profile Card</h2>
              <ProfileCard
                position="designer"
                TeamName="behzad pashaei"
                src={avater2}
              />
            </div>
          </div>
        </div>

        <div className="flex-col style-guide-wrapper overflow-auto">
          <h2 className="text-center">Hashtag</h2>
          <div className="">
            <div className="flex flex-nowrap gap-6 ">
              {HasTagDemo.map((content, index) => (
                <HasTag
                  className="HashtagDemo"
                  Image={content.Image}
                  alt={content.alt}
                  key={index}
                >
                  demo
                </HasTag>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-col style-guide-wrapper">
          <h2 className="text-center">Form Group</h2>
          <div className="w-full flex flex-col gap-3">
            <Input label="first name" />
            <TextArea
              label="textarea"
              col="10"
              row="10"
              placeholder={"hello"}
            />
            <TextEditor label="TextEditor" />
            <UploadPicture />
          </div>
        </div>

        <div className="style-guide-wrapper px-2 py-0 block">
          <Footer />
        </div>
      </Container>
    </section>
  );
};
