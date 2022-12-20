@echo off
cd /D %~dp0
call setenv.bat
start "" /D "%INTERNAL%\DeepFaceLab" "%INTERNAL%\VSCode\code.exe" --disable-workspace-trust "%~dp0project.code-workspace"
