import GitHubProfile from "@/components/github-profile";
import { CustomHoverCard } from "@/components/hover-card";
import { NaverLogo } from "@/components/naver-logo";
import { ProfileImage } from "@/components/profile-image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function ProfileSecion() {
  return (
    <section className="mt-6">
      <div className="flex flex-row max-sm:flex-col gap-4">
        <ProfileImage />
        <div>
          <div className="space-y-1">
            <div className="flex flex-row items-end gap-3">
              <h4 className="text-4xl font-medium leading-none max-sm:text-2xl">
                문세종
              </h4>
              <p>Sejong Moon</p>
            </div>
            <p className="text-sm text-muted-foreground">
              웹/앱 프론트엔드 개발자 RAIL입니다.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <CustomHoverCard text="Email">
              <div className="flex flex-row gap-2 items-center">
                <NaverLogo />
                <a
                  href="mailto:mmssjj72@naver.com"
                  className={cn("hover:underline text-sm text-black")}
                >
                  mmssjj72@naver.com
                </a>
              </div>
            </CustomHoverCard>
            <Separator orientation="vertical" />
            <CustomHoverCard text="Github">
              <GitHubProfile username="jongse7" />
            </CustomHoverCard>
            <Separator orientation="vertical" />
            <CustomHoverCard text="Tistory">
              <p>Coming Soon...</p>
            </CustomHoverCard>
          </div>
        </div>
      </div>
    </section>
  );
}
