package userService

import (
	"server/base"
)

func (this_ *UserService) BindApi(appendApi func(apis ...*base.ApiWorker)) {
	bindUserProfileApi(appendApi)
	bindUserAuthApi(appendApi)
	bindUserPasswordApi(appendApi)
	bindUserSettingApi(appendApi)

	bindManageUserApi(appendApi)
	bindManageUserPasswordApi(appendApi)
	bindManageUserAuthApi(appendApi)
	bindManageUserLockApi(appendApi)

}
