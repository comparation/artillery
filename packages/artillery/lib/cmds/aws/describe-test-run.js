const { Command, Flags } = require('@oclif/core');

var tryRequire = require('try-require');
const Pro = tryRequire('artillery-pro');

class DescribeTestRunCommand extends Command {
  static aliases = ['describe-test-run'];
  static hidden = true;
  async run() {
    const { flags, argv, args } = await this.parse(DescribeTestRunCommand);
    Pro.commands.describeTestRun(args.id);
  }
}

if (Pro) {
  DescribeTestRunCommand.description = Pro.oclif.describeTestRun.description;
  DescribeTestRunCommand.flags = Pro.oclif.describeTestRun.flags;
  DescribeTestRunCommand.args = Pro.oclif.describeTestRun.args;
} else {
  DescribeTestRunCommand.description = 'this command requires artillery-pro';
}

module.exports = DescribeTestRunCommand;
