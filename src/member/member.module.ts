import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Address} from '@common/model';
import {Member, MemberPlan, MemberSubscription} from './model/entity';
import {MemberController} from './member.controller';
import {MemberPlanController} from './member-plan.controller';
import {MemberService} from './member.service';
import {MemberPlanService} from './member-plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([Member, MemberPlan, MemberSubscription, Address])],
  controllers: [MemberController, MemberPlanController],
  providers: [MemberPlanService, MemberService]
})
export class MemberModule {
}